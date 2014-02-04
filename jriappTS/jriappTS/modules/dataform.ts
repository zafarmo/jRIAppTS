﻿module RIAPP {
    export module MOD {
        export module dataform {
            import constsMOD = MOD.consts;
            import utilsMOD = RIAPP.MOD.utils;
            import bindMOD = RIAPP.MOD.binding;
            import elviewMOD = MOD.baseElView;
            import contentMOD = RIAPP.MOD.baseContent;
            export var css = {
                dataform: 'ria-dataform'
            };
            var ERRTEXT = RIAPP.localizable.VALIDATE, utils: utilsMOD.Utils;
            RIAPP.global.addOnInitialize((s, args) => {
                utils = s.utils;
            });
            
            export class DataForm extends RIAPP.BaseObject {
                private get _DATA_CONTENT_SELECTOR() { return '*[' + constsMOD.DATA_ATTR.DATA_CONTENT + ']:not([' + constsMOD.DATA_ATTR.DATA_COLUMN + '])'; }
                private _el: HTMLElement;
                private _$el: JQuery;
                private _objId: string;
                private _dataContext: BaseObject;
                private _isEditing: boolean;
                private _isDisabled: boolean;
                private _content: contentMOD.IContent[];
                private _lfTime: utilsMOD.LifeTimeScope;
                private _contentCreated: boolean;
                private _supportEdit: boolean;
                private _supportErrNotify: boolean;
                private _parentDataForm: elviewMOD.BaseElView;
                private _errors: bindMOD.IValidationInfo[];
                private _app: Application;
                private _isInsideTemplate: boolean;

                constructor(app:Application, el:HTMLElement) {
                    super();
                    var self = this, parent: HTMLElement;
                    this._app = app;
                    this._el = el;
                    this._$el = global.$(this._el);
                    this._objId = 'frm' + utils.getNewID();
                    this._dataContext = null;
                    this._$el.addClass(css.dataform);
                    this._isEditing = false;
                    this._isDisabled = false;
                    this._content = [];
                    this._lfTime = null;
                    this._contentCreated = false;
                    this._supportEdit = false;
                    this._supportErrNotify = false;
                    this._parentDataForm = null;
                    this._errors = null;
                    parent = utils.getParentDataForm(null, this._el);
                    //if this form is nested inside another dataform
                    //subscribe for parent's destroy event
                    if (!!parent) {
                        self._parentDataForm = app.getElementView(parent);
                        self._parentDataForm.addOnDestroyed(function (sender, args) {
                            //destroy itself if parent form is destroyed
                            if (!self._isDestroyCalled)
                                self.destroy(); 
                        }, self._objId);
                    }
                }
                private _getBindings(): bindMOD.Binding[] {
                    if (!this._lfTime)
                        return [];
                    var arr: any[] = this._lfTime.getObjs(), res: bindMOD.Binding[] = [];
                    for (var i = 0, len = arr.length; i < len; i += 1) {
                        if (utils.check.isBinding(arr[i]))
                            res.push(arr[i]);
                    }
                    return res;
                }
                private _getElViews(): elviewMOD.BaseElView[] {
                    if (!this._lfTime)
                        return [];
                    var arr: any[] = this._lfTime.getObjs(), res: elviewMOD.BaseElView[] = [];
                    for (var i = 0, len = arr.length; i < len; i += 1) {
                        if (utils.check.isElView(arr[i]))
                            res.push(arr[i]);
                    }
                    return res;
                }
                private _updateIsDisabled() {
                    var i: number, len: number, bnd: bindMOD.Binding, vw: elviewMOD.BaseElView,
                        bindings = this._getBindings(), elViews = this._getElViews(),
                        DataFormElView = this.app._getElViewType(constsMOD.ELVIEW_NM.DATAFORM);
                    for (i = 0, len = bindings.length; i < len; i += 1) {
                        bnd = bindings[i];
                        bnd.isDisabled = this._isDisabled;
                    }
                    for (i = 0, len = elViews.length; i < len; i += 1) {
                        vw = elViews[i];
                        //can have a nested dataform. disable it too
                        if (vw instanceof DataFormElView) {
                            (<DataFormElView>vw).isDisabled = this._isDisabled;
                        }
                    }
                }
                private _createContent() {
                    var dctx: any = this._dataContext, self = this;
                    if (!dctx) {
                        return;
                    }
                    var supportsGetFieldInfo = utils.check.isFunction(dctx.getFieldInfo);

                    var elements: HTMLElement[] = ArrayHelper.fromList(this._el.querySelectorAll(self._DATA_CONTENT_SELECTOR)),
                        isEditing = this.isEditing;

                    //select all dataforms inside the scope
                    var formSelector = ['*[', constsMOD.DATA_ATTR.DATA_FORM, ']'].join(''),
                        forms = ArrayHelper.fromList(this._el.querySelectorAll(formSelector));

                    elements.forEach(function (el) {
                        //check if the element inside a nested dataform
                        if (utils.check.isInNestedForm(self._el, forms, el))
                            return;
                        var attr = el.getAttribute(constsMOD.DATA_ATTR.DATA_CONTENT), op = contentMOD.parseContentAttr(attr);
                        if (!!op.fieldName && !op.fieldInfo) {
                            if (!supportsGetFieldInfo) {
                                throw new Error(RIAPP.ERRS.ERR_DCTX_HAS_NO_FIELDINFO);
                            }
                            op.fieldInfo = dctx.getFieldInfo(op.fieldName);
                            if (!op.fieldInfo) {
                                throw new Error(utils.format(RIAPP.ERRS.ERR_DBSET_INVALID_FIELDNAME, '', op.fieldName));
                            }
                        }

                        var contentType = self.app._getContentType(op);
                        var content = self.app._getContent(contentType, op, el, dctx, isEditing);
                        if (!!content) {
                            self._content.push(content);
                        }
                    });
                    this._lfTime = self.app._bindElements(this._el, dctx, true, this.isInsideTemplate);
                    this._contentCreated = true;
                }
                private _updateContent() {
                    var dctx:any = this._dataContext, self = this;

                    if (this._contentCreated) {
                        this._content.forEach(function (content) {
                            content.dataContext = dctx;
                            content.isEditing = self.isEditing;
                        });

                        var bindings = this._getBindings();
                        bindings.forEach(function (binding) {
                            if (!binding.isSourceFixed)
                                binding.source = dctx;
                        });

                        return;
                    }

                    this._createContent();
                }
                private _onDSErrorsChanged() {
                    var dataContext: bindMOD.IErrorNotification = <any>this._dataContext;
                    this.validationErrors = dataContext.getAllErrors();
                }
                private _bindDS() {
                    var dataContext:any = this._dataContext, self = this;
                    if (!dataContext)
                        return;
                    dataContext.addOnDestroyed(function (s, a) {
                        self.dataContext = null;
                    }, self._objId);

                    if (this._supportEdit) {
                        dataContext.addOnPropertyChange('isEditing', function (sender, args) {
                            self.isEditing = sender.isEditing;
                        }, self._objId);
                    }

                    if (this._supportErrNotify) {
                        (<bindMOD.IErrorNotification>dataContext).addOnErrorsChanged(function (sender, args) {
                            self._onDSErrorsChanged();
                        }, self._objId);
                    }
                }
                private _unbindDS() {
                    var dataContext = this._dataContext;
                    this.validationErrors = null;
                    if (!!dataContext && !dataContext._isDestroyCalled) {
                        dataContext.removeNSHandlers(this._objId);
                    }
                }
                private _clearContent() {
                    this._content.forEach(function (content) {
                        content.destroy();
                    });
                    this._content = [];
                    if (!!this._lfTime) {
                        this._lfTime.destroy();
                        this._lfTime = null;
                    }
                    this._contentCreated = false;
                }
                destroy() {
                    if (this._isDestroyed)
                        return;
                    this._isDestroyCalled = true;
                    this._clearContent();
                    this._$el.removeClass(css.dataform);
                    this._el = null;
                    this._$el = null;
                    this._unbindDS();
                    var parentDataForm = this._parentDataForm;
                    this._parentDataForm = null;
                    if (!!parentDataForm && !parentDataForm._isDestroyCalled) {
                        parentDataForm.removeNSHandlers(this._objId);
                    }
                    this._dataContext = null;
                    this._contentCreated = false;
                    this._app = null;
                    super.destroy();
                }
                toString() {
                    return 'DataForm_' + this._objId;
                }
                get app() { return this._app; }
                get el() { return this._el; }
                get dataContext() { return this._dataContext; }
                set dataContext(v: BaseObject) {
                    var dataContext:any;
                    try {
                        if (v === this._dataContext)
                            return;
                        if (!!v && !utils.check.isBaseObj(v)) {
                            throw new Error(RIAPP.ERRS.ERR_DATAFRM_DCTX_INVALID);
                        }
                        this._unbindDS();
                        this._supportEdit = false;
                        this._supportErrNotify = false;
                        this._dataContext = v;
                        dataContext = this._dataContext;

                        if (!!dataContext) {
                            this._supportEdit = utils.check.isEditable(dataContext);
                            this._supportErrNotify = bindMOD._checkIsErrorNotification(dataContext);
                        }
                        this._bindDS();
                        this._updateContent();
                        this.raisePropertyChanged('dataContext');
                        if (!!dataContext) {
                            if (this._supportEdit && this._isEditing !== (<utilsMOD.IEditable>dataContext).isEditing) {
                                this.isEditing = (<utilsMOD.IEditable>dataContext).isEditing;
                            }
                            if (this._supportErrNotify) {
                                this._onDSErrorsChanged();
                            }
                        }
                    } catch (ex) {
                        global.reThrow(ex, this._onError(ex, this));
                    }
                }
                get isEditing() { return this._isEditing; }
                set isEditing(v) {
                    var dataContext: any = this._dataContext;
                    if (!dataContext)
                        return;
                    var isEditing = this._isEditing, editable: utilsMOD.IEditable;

                    if (!this._supportEdit && v !== isEditing) {
                        this._isEditing = v;
                        this._updateContent();
                        this.raisePropertyChanged('isEditing');
                        return;
                    }

                    if (this._supportEdit)
                        editable = <utilsMOD.IEditable>dataContext;

                    if (v !== isEditing) {
                        try {
                            if (v) {
                                editable.beginEdit();
                            }
                            else {
                                editable.endEdit();
                            }
                        }
                        catch (ex) {
                            global.reThrow(ex, this._onError(ex, dataContext));
                        }
                    }

                    if (this._supportEdit && editable.isEditing !== isEditing) {
                        this._isEditing = editable.isEditing;
                        this._updateContent();
                        this.raisePropertyChanged('isEditing');
                    }
                }
                get validationErrors() { return this._errors; }
                set validationErrors(v) {
                    if (v !== this._errors) {
                        this._errors = v;
                        this.raisePropertyChanged('validationErrors');
                    }
                }
                get isDisabled() { return this._isDisabled; }
                set isDisabled(v: boolean) {
                    if (this._isDisabled !== v) {
                        this._isDisabled = v;
                        this._updateIsDisabled();
                        this.raisePropertyChanged('isDisabled');
                    }
                }
                get isInsideTemplate() { return this._isInsideTemplate; }
                set isInsideTemplate(v: boolean) {
                    this._isInsideTemplate = v;
                }
            }
     
            export class DataFormElView extends elviewMOD.BaseElView {
                private _form: DataForm;
                private _options: elviewMOD.IViewOptions;

                constructor(app: Application, el: HTMLSelectElement, options: elviewMOD.IViewOptions) {
                    super(app, el, options);
                    var self = this;
                    this._options = options;
                    this._form = new DataForm(this.app, el);
                    this._form.addOnDestroyed(function () {
                        self._form = null;
                        self.invokePropChanged('form');
                        self.raisePropertyChanged('form');
                    });
                    this._form.addOnPropertyChange('*', function (form, args) {
                        switch (args.property) {
                            case 'validationErrors':
                                self.validationErrors = form.validationErrors;
                                break;
                            case 'dataContext':
                            case 'isDisabled':
                                self.raisePropertyChanged(args.property);
                                break;
                        }
                    }, this._objId);
                }
                _getErrorTipInfo(errors: bindMOD.IValidationInfo[]) {
                    var tip = ['<b>', ERRTEXT.errorInfo, '</b>', '<ul>'];
                    errors.forEach(function (info) {
                        var fieldName = info.fieldName, res = '';
                        if (!!fieldName) {
                            res = ERRTEXT.errorField + ' ' + fieldName
                        }
                        info.errors.forEach(function (str) {
                            if (!!res)
                                res = res + ' -> ' + str;
                            else
                                res = str;
                        });
                        tip.push('<li>' + res + '</li>');
                        res = '';
                    });
                    tip.push('</ul>');
                    return tip.join('');
                }
                _updateErrorUI(el: HTMLElement, errors: bindMOD.IValidationInfo[]) {
                    if (!el) {
                        return;
                    }
                    var $el = this.$el;
                    if (!!errors && errors.length > 0) {
                        var $img, image_src = global.getImagePath('warning.png');
                        $img = global.$('<img name="error_info" alt="error_info" class="error-info" />');
                        $el.prepend($img);
                        $img.get(0).src = image_src;
                        utils.addToolTip($img, this._getErrorTipInfo(errors), elviewMOD.css.errorTip);
                        this._setFieldError(true);
                    }
                    else {
                        $el.children('img[name="error_info"]').remove();
                        this._setFieldError(false);
                    }
                }
                destroy() {
                    if (this._isDestroyed)
                        return;
                    this._isDestroyCalled = true;
                    if (!!this._form && !this._form._isDestroyCalled) {
                        this._form.destroy();
                    }
                    this._form = null;
                    super.destroy();
                }
                toString() {
                    return 'DataFormElView';
                }
                get dataContext() {
                    if (this._isDestroyCalled)
                        return null;
                    return this._form.dataContext;
                }
                set dataContext(v) {
                    if (this._isDestroyCalled)
                        return;
                    if (this.dataContext !== v) {
                        this._form.dataContext = v;
                    }
                }
                get isDisabled() {
                    if (this._isDestroyCalled)
                        return true;
                    return this._form.isDisabled;
                }
                set isDisabled(v: boolean) {
                    if (this._isDestroyCalled)
                        return;
                    if (this.isDisabled !== v) {
                        this._form.isDisabled = v;
                    }
                }
                get form() { return this._form; }
            }

            global.registerType('DataFormElView', DataFormElView);
            global.registerElView(constsMOD.ELVIEW_NM.DATAFORM, DataFormElView);
            global.onModuleLoaded('dataform', dataform);
        }
    }
}

﻿/// <reference path="..\jriapp.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RIAPP;
(function (RIAPP) {
    (function (FOLDERBROWSER_SVC) {
        'use strict';

        

        var FileSystemObject = (function (_super) {
            __extends(FileSystemObject, _super);
            function FileSystemObject(dbSet, row, names) {
                _super.call(this, dbSet, row, names);
            }
            Object.defineProperty(FileSystemObject.prototype, "Key", {
                get: function () {
                    return this._getFieldVal('Key');
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FileSystemObject.prototype, "ParentKey", {
                get: function () {
                    return this._getFieldVal('ParentKey');
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FileSystemObject.prototype, "Name", {
                get: function () {
                    return this._getFieldVal('Name');
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FileSystemObject.prototype, "Level", {
                get: function () {
                    return this._getFieldVal('Level');
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FileSystemObject.prototype, "HasSubDirs", {
                get: function () {
                    return this._getFieldVal('HasSubDirs');
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FileSystemObject.prototype, "IsFolder", {
                get: function () {
                    return this._getFieldVal('IsFolder');
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FileSystemObject.prototype, "fullPath", {
                get: function () {
                    return this._getCalcFieldVal('fullPath');
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FileSystemObject.prototype, "Parent", {
                get: function () {
                    return this._getNavFieldVal('Parent');
                },
                set: function (v) {
                    this._setNavFieldVal('Parent', v);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FileSystemObject.prototype, "Children", {
                get: function () {
                    return this._getNavFieldVal('Children');
                },
                enumerable: true,
                configurable: true
            });

            FileSystemObject.prototype.getDbContext = function () {
                return _super.prototype.getDbContext.call(this);
            };
            FileSystemObject.prototype.getDbSet = function () {
                return _super.prototype.getDbSet.call(this);
            };
            Object.defineProperty(FileSystemObject.prototype, "_dbSet", {
                get: function () {
                    return this.getDbSet();
                },
                enumerable: true,
                configurable: true
            });
            FileSystemObject.prototype.toString = function () {
                return 'FileSystemObjectEntity';
            };
            FileSystemObject.prototype.asEntity = function () {
                return this;
            };
            FileSystemObject.prototype.asInterface = function () {
                return this;
            };
            return FileSystemObject;
        })(RIAPP.MOD.db.Entity);
        FOLDERBROWSER_SVC.FileSystemObject = FileSystemObject;

        var FileSystemObjectDb = (function (_super) {
            __extends(FileSystemObjectDb, _super);
            function FileSystemObjectDb(dbContext) {
                var self = this, opts = {
                    dbContext: dbContext,
                    dbSetInfo: { "fieldInfos": [{ "fieldName": "Key", "isPrimaryKey": 1, "dataType": 1, "isNullable": false, "isReadOnly": true, "isAutoGenerated": true, "isNeedOriginal": true, "maxLength": 255, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "ParentKey", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 255, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Name", "isPrimaryKey": 0, "dataType": 1, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": 255, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "Level", "isPrimaryKey": 0, "dataType": 3, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "HasSubDirs", "isPrimaryKey": 0, "dataType": 2, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "IsFolder", "isPrimaryKey": 0, "dataType": 2, "isNullable": false, "isReadOnly": true, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 0, "dependentOn": "", "nested": null }, { "fieldName": "fullPath", "isPrimaryKey": 0, "dataType": 1, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 2, "dependentOn": "", "nested": null }, { "fieldName": "Parent", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "ParentKey", "nested": null }, { "fieldName": "Children", "isPrimaryKey": 0, "dataType": 0, "isNullable": true, "isReadOnly": false, "isAutoGenerated": false, "isNeedOriginal": true, "maxLength": -1, "dateConversion": 0, "allowClientDefault": false, "range": "", "regex": "", "fieldType": 3, "dependentOn": "", "nested": null }], "enablePaging": false, "pageSize": 25, "dbSetName": "FileSystemObject" },
                    childAssoc: [{ "name": "ChildToParent", "parentDbSetName": "FileSystemObject", "childDbSetName": "FileSystemObject", "childToParentName": "Parent", "parentToChildrenName": "Children", "onDeleteAction": 1, "fieldRels": [{ "parentField": "Key", "childField": "ParentKey" }] }],
                    parentAssoc: [{ "name": "ChildToParent", "parentDbSetName": "FileSystemObject", "childDbSetName": "FileSystemObject", "childToParentName": "Parent", "parentToChildrenName": "Children", "onDeleteAction": 1, "fieldRels": [{ "parentField": "Key", "childField": "ParentKey" }] }]
                }, utils = RIAPP.global.utils;
                _super.call(this, opts, FileSystemObject);
            }
            FileSystemObjectDb.prototype.findEntity = function (key) {
                return this.findByPK(RIAPP.ArrayHelper.fromList(arguments));
            };
            FileSystemObjectDb.prototype.createReadRootQuery = function (args) {
                var query = this.createQuery('ReadRoot');
                query.params = args;
                return query;
            };
            FileSystemObjectDb.prototype.createReadChildrenQuery = function (args) {
                var query = this.createQuery('ReadChildren');
                query.params = args;
                return query;
            };

            FileSystemObjectDb.prototype.definefullPathField = function (getFunc) {
                this._defineCalculatedField('fullPath', getFunc);
            };

            Object.defineProperty(FileSystemObjectDb.prototype, "items2", {
                get: function () {
                    return this.items;
                },
                enumerable: true,
                configurable: true
            });
            return FileSystemObjectDb;
        })(RIAPP.MOD.db.DbSet);
        FOLDERBROWSER_SVC.FileSystemObjectDb = FileSystemObjectDb;

        var DbSets = (function (_super) {
            __extends(DbSets, _super);
            function DbSets(dbContext) {
                _super.call(this, dbContext);
                this._dbSetNames = ["FileSystemObject"];
                this._createDbSet("FileSystemObject", FileSystemObjectDb);
            }
            Object.defineProperty(DbSets.prototype, "FileSystemObject", {
                get: function () {
                    return this.getDbSet("FileSystemObject");
                },
                enumerable: true,
                configurable: true
            });
            return DbSets;
        })(RIAPP.MOD.db.DbSets);
        FOLDERBROWSER_SVC.DbSets = DbSets;

        var DbContext = (function (_super) {
            __extends(DbContext, _super);
            function DbContext() {
                _super.apply(this, arguments);
            }
            DbContext.prototype._initDbSets = function () {
                _super.prototype._initDbSets.call(this);
                this._dbSets = new DbSets(this);
                var associations = [{ "name": "ChildToParent", "parentDbSetName": "FileSystemObject", "childDbSetName": "FileSystemObject", "childToParentName": "Parent", "parentToChildrenName": "Children", "onDeleteAction": 1, "fieldRels": [{ "parentField": "Key", "childField": "ParentKey" }] }];
                this._initAssociations(associations);
                var methods = [{ "methodName": "ReadRoot", "parameters": [{ "name": "includeFiles", "dataType": 2, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 0 }], "methodResult": true, "isQuery": true }, { "methodName": "ReadChildren", "parameters": [{ "name": "parentKey", "dataType": 1, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 0 }, { "name": "level", "dataType": 3, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 1 }, { "name": "path", "dataType": 1, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 2 }, { "name": "includeFiles", "dataType": 2, "isArray": false, "isNullable": false, "dateConversion": 0, "ordinal": 3 }], "methodResult": true, "isQuery": true }];
                this._initMethods(methods);
            };
            Object.defineProperty(DbContext.prototype, "associations", {
                get: function () {
                    return this._assoc;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DbContext.prototype, "dbSets", {
                get: function () {
                    return this._dbSets;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DbContext.prototype, "serviceMethods", {
                get: function () {
                    return this._svcMethods;
                },
                enumerable: true,
                configurable: true
            });
            return DbContext;
        })(RIAPP.MOD.db.DbContext);
        FOLDERBROWSER_SVC.DbContext = DbContext;
    })(RIAPP.FOLDERBROWSER_SVC || (RIAPP.FOLDERBROWSER_SVC = {}));
    var FOLDERBROWSER_SVC = RIAPP.FOLDERBROWSER_SVC;
})(RIAPP || (RIAPP = {}));
//# sourceMappingURL=folderBrowserSvc.js.map

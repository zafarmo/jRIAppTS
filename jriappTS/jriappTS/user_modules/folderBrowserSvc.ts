/// <reference path="..\jriapp.ts"/>
module RIAPP
{
    'use strict';
    export module FOLDERBROWSER_SVC {
        /*
            Generated from: /FolderBrowserService/GetTypeScript on 2013-10-18 11:22 at 11:22
            Don't make manual changes here, because they will be lost when this db interface will be regenerated!
        */

        export interface ISvcMethods {
        }


        export interface IFileSystemObject extends RIAPP.MOD.utils.IEditable, RIAPP.MOD.utils.ISubmittable {
            Key: string;
            ParentKey: string;
            Name: string;
            Level: number;
            HasSubDirs: boolean;
            IsFolder: boolean;
            fullPath: string;
            Parent: FileSystemObject;
            Children: FileSystemObject[];

            getDbContext(): DbContext;
            getDbSet(): RIAPP.MOD.db.DbSet<FileSystemObject>;
            _dbSet: RIAPP.MOD.db.DbSet<FileSystemObject>;
            asEntity(): FileSystemObject;
        }

        export class FileSystemObject extends RIAPP.MOD.db.Entity implements IFileSystemObject {
            get Key() { return <string>this._getFieldVal('Key'); }
            get ParentKey() { return <string>this._getFieldVal('ParentKey'); }
            get Name() { return <string>this._getFieldVal('Name'); }
            get Level() { return <number>this._getFieldVal('Level'); }
            get HasSubDirs() { return <boolean>this._getFieldVal('HasSubDirs'); }
            get IsFolder() { return <boolean>this._getFieldVal('IsFolder'); }
            get fullPath() { return <string>this._dbSet._calcfldMap['fullPath'].getFunc.call(this); }
            get Parent() { return <FileSystemObject>this._dbSet._navfldMap['Parent'].getFunc.call(this); }
            set Parent(v: FileSystemObject) { this._dbSet._navfldMap['Parent'].setFunc.call(this, v); }
            get Children() { return <FileSystemObject[]>this._dbSet._navfldMap['Children'].getFunc.call(this); }

            getDbContext() {
                return <DbContext>super.getDbContext();
            }
            getDbSet() {
                return <RIAPP.MOD.db.DbSet<FileSystemObject>>super.getDbSet();
            }
            get _dbSet() { return this.getDbSet(); }
            toString() {
                return 'FileSystemObject';
            }
            asEntity() { return this; }
            asInterface() { return <IFileSystemObject>this; }
        }

        export class FileSystemObjectDb extends RIAPP.MOD.db.DbSet<FileSystemObject>
        {
            constructor(dbContext: DbContext) {
                var self = this, opts: RIAPP.MOD.db.IDbSetConstuctorOptions = {
                    dbContext: dbContext,
                    dbSetInfo: { "dbSetName": "FileSystemObject", "enablePaging": false, "fieldInfos": [{ "allowClientDefault": false, "dataType": 1, "dateConversion": 0, "dependentOn": "", "fieldName": "Key", "isAutoGenerated": true, "isCalculated": false, "isClientOnly": false, "isNavigation": false, "isNeedOriginal": true, "isNullable": false, "isPrimaryKey": 1, "isReadOnly": true, "isRowTimeStamp": false, "maxLength": 255, "range": "", "regex": "" }, { "allowClientDefault": false, "dataType": 1, "dateConversion": 0, "dependentOn": "", "fieldName": "ParentKey", "isAutoGenerated": false, "isCalculated": false, "isClientOnly": false, "isNavigation": false, "isNeedOriginal": true, "isNullable": true, "isPrimaryKey": 0, "isReadOnly": true, "isRowTimeStamp": false, "maxLength": 255, "range": "", "regex": "" }, { "allowClientDefault": false, "dataType": 1, "dateConversion": 0, "dependentOn": "", "fieldName": "Name", "isAutoGenerated": false, "isCalculated": false, "isClientOnly": false, "isNavigation": false, "isNeedOriginal": true, "isNullable": false, "isPrimaryKey": 0, "isReadOnly": true, "isRowTimeStamp": false, "maxLength": 255, "range": "", "regex": "" }, { "allowClientDefault": false, "dataType": 3, "dateConversion": 0, "dependentOn": "", "fieldName": "Level", "isAutoGenerated": false, "isCalculated": false, "isClientOnly": false, "isNavigation": false, "isNeedOriginal": true, "isNullable": false, "isPrimaryKey": 0, "isReadOnly": true, "isRowTimeStamp": false, "maxLength": -1, "range": "", "regex": "" }, { "allowClientDefault": false, "dataType": 2, "dateConversion": 0, "dependentOn": "", "fieldName": "HasSubDirs", "isAutoGenerated": false, "isCalculated": false, "isClientOnly": false, "isNavigation": false, "isNeedOriginal": true, "isNullable": false, "isPrimaryKey": 0, "isReadOnly": true, "isRowTimeStamp": false, "maxLength": -1, "range": "", "regex": "" }, { "allowClientDefault": false, "dataType": 2, "dateConversion": 0, "dependentOn": "", "fieldName": "IsFolder", "isAutoGenerated": false, "isCalculated": false, "isClientOnly": false, "isNavigation": false, "isNeedOriginal": true, "isNullable": false, "isPrimaryKey": 0, "isReadOnly": true, "isRowTimeStamp": false, "maxLength": -1, "range": "", "regex": "" }, { "allowClientDefault": false, "dataType": 1, "dateConversion": 0, "dependentOn": "", "fieldName": "fullPath", "isAutoGenerated": false, "isCalculated": true, "isClientOnly": false, "isNavigation": false, "isNeedOriginal": true, "isNullable": true, "isPrimaryKey": 0, "isReadOnly": false, "isRowTimeStamp": false, "maxLength": -1, "range": "", "regex": "" }, { "allowClientDefault": false, "dataType": 0, "dateConversion": 0, "dependentOn": "ParentKey", "fieldName": "Parent", "isAutoGenerated": false, "isCalculated": false, "isClientOnly": true, "isNavigation": true, "isNeedOriginal": true, "isNullable": true, "isPrimaryKey": 0, "isReadOnly": false, "isRowTimeStamp": false, "maxLength": -1, "range": "", "regex": "" }, { "allowClientDefault": false, "dataType": 0, "dateConversion": 0, "dependentOn": "", "fieldName": "Children", "isAutoGenerated": false, "isCalculated": false, "isClientOnly": true, "isNavigation": true, "isNeedOriginal": true, "isNullable": true, "isPrimaryKey": 0, "isReadOnly": false, "isRowTimeStamp": false, "maxLength": -1, "range": "", "regex": "" }], "pageSize": 25 },
                    childAssoc: [{ "childDbSetName": "FileSystemObject", "childToParentName": "Parent", "fieldRels": [{ "childField": "ParentKey", "parentField": "Key" }], "name": "ChildToParent", "onDeleteAction": 1, "parentDbSetName": "FileSystemObject", "parentToChildrenName": "Children" }],
                    parentAssoc: [{ "childDbSetName": "FileSystemObject", "childToParentName": "Parent", "fieldRels": [{ "childField": "ParentKey", "parentField": "Key" }], "name": "ChildToParent", "onDeleteAction": 1, "parentDbSetName": "FileSystemObject", "parentToChildrenName": "Children" }]
                }, utils = RIAPP.global.utils;
                super(opts);
                self._entityType = FileSystemObject;

                opts.dbSetInfo.fieldInfos.forEach(function (f) {
                    f.dependents = [];
                    self._fieldMap[f.fieldName] = f;
                });

                opts.dbSetInfo.fieldInfos.forEach(function (f) {
                    if (!!f.isNavigation) {
                        self._navfldMap[f.fieldName] = self._doNavigationField(opts, f);
                    }
                    else if (!!f.isCalculated) {
                        self._calcfldMap[f.fieldName] = self._doCalculatedField(opts, f);
                    }
                });

                self._mapAssocFields();
            }
            createReadRootQuery(args?: {
                includeFiles: boolean;
            }) {
                var query = this.createQuery('ReadRoot');
                query.params = args;
                return query;
            }
            createReadChildrenQuery(args?: {
                parentKey: string;
                level: number;
                path: string;
                includeFiles: boolean;
            }) {
                var query = this.createQuery('ReadChildren');
                query.params = args;
                return query;
            }

            definefullPathField(getFunc: () => string) { this.defineCalculatedField('fullPath', getFunc); }

            get items2() { return <IFileSystemObject[]><any>this.items; }
        }

        export interface IAssocs {
            getChildToParent: () => MOD.db.Association;
        }


        export class DbSets extends RIAPP.MOD.db.DbSets {
            constructor(dbContext: DbContext) {
                super(dbContext);
                this._dbSetNames = ["FileSystemObject"];
                this._createDbSet("FileSystemObject", FileSystemObjectDb);

            }
            get FileSystemObject() { return <FileSystemObjectDb>this.getDbSet("FileSystemObject"); }

        }

        export class DbContext extends RIAPP.MOD.db.DbContext {
            _initDbSets() {
                super._initDbSets();
                this._dbSets = new DbSets(this);
                var associations = [{ "childDbSetName": "FileSystemObject", "childToParentName": "Parent", "fieldRels": [{ "childField": "ParentKey", "parentField": "Key" }], "name": "ChildToParent", "onDeleteAction": 1, "parentDbSetName": "FileSystemObject", "parentToChildrenName": "Children" }];
                this._initAssociations(associations);
                var methods = [{ "isQuery": true, "methodName": "ReadRoot", "methodResult": true, "parameters": [{ "dataType": 2, "dateConversion": 0, "isArray": false, "isNullable": false, "name": "includeFiles", "ordinal": 1 }] }, { "isQuery": true, "methodName": "ReadChildren", "methodResult": true, "parameters": [{ "dataType": 1, "dateConversion": 0, "isArray": false, "isNullable": false, "name": "parentKey", "ordinal": 1 }, { "dataType": 3, "dateConversion": 0, "isArray": false, "isNullable": false, "name": "level", "ordinal": 2 }, { "dataType": 1, "dateConversion": 0, "isArray": false, "isNullable": false, "name": "path", "ordinal": 3 }, { "dataType": 2, "dateConversion": 0, "isArray": false, "isNullable": false, "name": "includeFiles", "ordinal": 4 }] }];
                this._initMethods(methods);
            }
            get associations() { return <IAssocs>this._assoc; }
            get dbSets() { return <DbSets>this._dbSets; }
            get serviceMethods() { return <ISvcMethods>this._svcMethods; }
        }
    }
}

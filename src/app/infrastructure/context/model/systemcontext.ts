import { Injectable } from '@angular/core';
import {GlobalAttributesModel} from '../../globalattributes/model/globalattributesmodel';

Injectable()
export class SystemContext{
    APIURL:string;
    SSOURL:string;
    EndSession:boolean;
    public menuItems: any[];
    CurrentGlobalAttributes:GlobalAttributesModel[];
    openBitacora:boolean = false;
    VersionAPI:string;
    VersionSYSIN:string;
    


}

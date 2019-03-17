import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {GlobalAttributesModel} from '../model/globalattributesmodel';

@Injectable()
export class GlobalAttributesService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:8959/api/Default/';  // URL to web api
 listGlobals:GlobalAttributesModel[]

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
      console.log(error._body);
      return Promise.reject(error || error);
    }

    getAllGlobalAttributes(): Observable<GlobalAttributesModel[]> {
      return this.http.post(this.url + 'PostGetGlobalAttributes', {headers: this.headers})
      .map(res =>  {
        //console.log(res.json());
        this.listGlobals = res.json() as GlobalAttributesModel[];
        console.log(this.listGlobals);
        return this.listGlobals;
       }
      ).catch(this.handleError);
    }

    update(gm: GlobalAttributesModel): Observable<GlobalAttributesModel[]> {
      return this.http.post(this.url + 'PostUpdateGlobalAttribute', gm, {headers: this.headers})
      .map(res =>  {
        //console.log(res.json());
        this.listGlobals = res.json() as GlobalAttributesModel[];
        console.log(this.listGlobals);
        return this.listGlobals;
      }).catch(this.handleError);
    }





}

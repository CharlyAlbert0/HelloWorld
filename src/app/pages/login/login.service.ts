import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Headers, Http, RequestOptions, RequestMethod,Response } from '@angular/http';
import { LoginModel } from './model/login.model';
import { LogsComponent } from '../../infrastructure/logs/logs.component';
import { GetVersionAPIRequest } from './model/GetVersionAPIRequest.model';
import { SystemContext } from '../../infrastructure/context/model/systemcontext';
declare var swal: any;


@Injectable()
export class LoginService {
  private urlApi = 'ReeplaceByConfigFile'
  constructor(private http: Http
              ,private logsComponent:LogsComponent,private _SystemContext:SystemContext) {


  }

  GetUrlLocalStorage(){
    if(localStorage.getItem('APIURL')){
        this.urlApi = localStorage.getItem('APIURL')
    }
  }
  GetVersionAPI(request:GetVersionAPIRequest): Observable<string>{
    
    this.GetUrlLocalStorage();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    // headers.append('authorization', 'bearer ' + localStorage.getItem('token'))
    headers.append('Accept', 'application/json')
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

    // let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    return this.http.post(this.urlApi+'App/GetVersionAPI',request, options)
    .map(res =>  {console.log(res.json()); return res.json() as string }).catch(this.handleError);

  }

  // GetVersionAPI(request:GetVersionAPIRequest): Observable<string>{
  //   if(localStorage.getItem('SystemContext') !=null){
  //     this._SystemContext=JSON.parse(localStorage.getItem('SystemContext'));
  //   }
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');
  //   //headers.append('authorization', 'bearer ' + localStorage.getItem('token'))
  //   headers.append('Accept', 'application/json')
  //   let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    
  //   return this.http.post(this._SystemContext.APIURL+'/api/App/GetVersionAPI', request, options)
  //   .catch((err, caught) => this.handleError(err, caught));
  // }

  login(username: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}

  protected handleError (error: Response | any) {
    
      // In a real world app, you might use a remote logging infrastructure
      let errMsg: any;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        //errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        errMsg =error
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      //console.clear();
      console.error(errMsg);
      return Observable.throw(errMsg);
    }








}

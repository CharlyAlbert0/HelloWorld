import { Injectable } from '@angular/core';
import { Headers, Http ,RequestOptions, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';



import { LogsModel } from './model/logsmodel';
import { SystemContext } from '../context/model/systemcontext';
import { ClientErrorModel } from './model/clienterror';


@Injectable()
export class LogsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:8959/api/Default/';  // URL to web api
  listLogs:LogsModel[]

  constructor(private http: Http,private _SystemContext:SystemContext ) { }

  private handleError(error: any): Promise<any> {
    console.log(error._body);
    return Promise.reject(error || error);
  }

  getLogs(): Observable<LogsModel[]> {
    return this.http.post(this.url + 'PostGetLogs', {headers: this.headers})
    .map(res =>  {
      //console.log(res.json());
      this.listLogs = res.json() as LogsModel[];
      console.log(this.listLogs);
      return this.listLogs;
    }
  ).catch(this.handleError);
}

AddLog( Message:string,
  Type?:number,
  Priority?:number,
  ExceptionMessage?:string,
  StackTrace?:string){

    try{

      //nuevo modelo de log para enviar a BD o storage
      let logObj:LogsModel;
      //paso de paramtros a modelo
      logObj.Message=Message;

      //si hay atributos
      if(this._SystemContext.CurrentGlobalAttributes != undefined){
        //variable pasa saber si se logea a bd
        let LogDataBase:string;
        //variable pasa saber si se logea a console
        let LogConsole:string;
        //variable pasa saber si se logea a LS
        let LogLocalStorage:string;

        //valor a variable bandera console
        LogConsole= this._SystemContext.CurrentGlobalAttributes.find(global => global.Name == "LogConsole").Name;

        //valor a variable bandera BD
        LogDataBase= this._SystemContext.CurrentGlobalAttributes.find(global => global.Name == "LogDataBase").Name;

        //valor a variable bandera LS
        LogLocalStorage= this._SystemContext.CurrentGlobalAttributes.find(global => global.Name == "LogLocalStorage").Name;

        //saber si se loge a consola
        if(LogConsole == "true"){
          console.log("MESSAGE -> "+Message + " ," + StackTrace);
        }

        //saber si se loge a BD
        if(LogDataBase == "true"){
          this.logDataBase(logObj);
        }

        //saber si se loge a BD
        if(LogLocalStorage == "true"){
          //code here
        }
      }
    }
    catch(exception){
      console.log(exception)
    }



  }


  logDataBase(lm:LogsModel){
    return this.http.post(this.url + 'PostAddLog', lm, {headers: this.headers})
    .map(res=> res.json() as boolean)
    .catch(this.handleError);
  }

  logLocalStorage(lm:LogsModel){

  }

  clientLogError(error: ClientErrorModel): Observable<boolean>{
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('authorization', 'bearer ' + localStorage.getItem('token'))
    headers.append('Accept', 'application/json')
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    //return this.http.post('http://192.168.1.216/DEV/APPLICATIONS/LIMIT_RULES_BACKEND/api/LimitRules/InsertLimitRules?version=1', limitRuleVariableValue, options)
    return this.http.post('  http://localhost:40903/api/LimitRules/ClientLogError?version=1', error, options)
    .catch(this.handleError);
  }






}

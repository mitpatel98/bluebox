import { AppGlobalService } from './../appGlobal/app-global.service';
import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {

  constructor(public http:HttpClient,public appGlobal:AppGlobalService) {

   }
   getUser(page:any){
     return this.http.get(this.appGlobal.BaseURl+page,this.getHTTPOptions())
   }
   getHTTPOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }


}

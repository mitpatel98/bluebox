import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppGlobalService {

  constructor(public http:HttpClient) { 

  }

  public BaseURl='https://reqres.in/api/users?page='


}

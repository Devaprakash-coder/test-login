import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }
  url = "https://test-login-db-app.herokuapp.com"

  saveUser(userDetails: any) {
    return this
      .http
      .post(`${this.url}/user`,userDetails);
  }

  getUser(userName: any):Observable<any> {
    userName = userName;
    return this
      .http
      .get(`${this.url}/user/${userName}`)
      .pipe(
        map(res => res)
      )
  }
}

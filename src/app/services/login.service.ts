import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
//import { LoginModel } from 'app/viewmodel/loginmodel';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs'
// tslint:disable-next-line:import-blacklist
import 'rxjs'
@Injectable()
export class LoginService {

  constructor(private http: Http, private router: Router) { }
  // tslint:disable-next-line:member-ordering
  JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }) });
  // tslint:disable-next-line:member-ordering
  _url = 'http://192.168.137.1:88/api/token'
  Login(LoginData): Observable<boolean> {
    return this.http.post(this._url, JSON.stringify(LoginData), this.JSONoptions)
      .map((res: Response) => {
        const token = res.json() && res.json().token;
        if (token) {
          //console.log(token)
          localStorage.setItem('token', JSON.stringify({ username: LoginData.Username, token: res.json().token }));
          return true;
        } else {
          return false;
        }
      })

  }
  Logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/Login']);
  }
}

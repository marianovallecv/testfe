import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoguin } from '../model/user-login';
import { Jwt } from '../model/jwt';
import { Observable } from 'rxjs';
import { GlobalVariables as gv } from '../configuration/globals';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService {
  module: string = 'auth';

  url = gv.CONFIGURATION.general.apiURL + '/' + this.module + '/';

  constructor(private httpClient: HttpClient) { }

  public login(loginUser: UserLoguin): Observable<Jwt> {
    return this.httpClient.post<Jwt>(this.url + 'login', loginUser);
  }
}

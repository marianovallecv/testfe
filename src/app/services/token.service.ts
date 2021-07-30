import { Injectable } from '@angular/core';

// Se almacenan en el navegador
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  authorities: Array<string> = [];

  constructor() {
  }

  public setToken(token: string): void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any{
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setUserName(userName: string): void{
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(): any{
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public setAuthorities(authorities: string[]): void{
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  /**
   *
   *
   */
  public getAuthorities(): string[]{
    this.authorities = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)){
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY) || '{}').forEach((authority: { authority: string; }) => {
        this.authorities.push(authority.authority);
      });
    }
    return this.authorities;
  }

  isLogued(): boolean{
    if (this.getToken()){
      return true;
    }else{
      return false;
    }
  }

  public isAdmin(): boolean{
    let roles: string[];
    let value: boolean = false;

    roles = this.getAuthorities();
    roles.forEach(role => {
      if (role === 'ROLE_ADMIN'){
        value = true;
      }
    });
    return value;
  }

  public logOut(): void{
    window.sessionStorage.clear();
  }
}

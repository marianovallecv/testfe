import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalVariables as gv } from '../../../configuration/globals';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() showLogin!: boolean;

  userName!: string;
  roles: string[] = [];
  isAdm = false;
  isLogged!: boolean;

  title!: string;

  constructor(private tokenService: TokenService, private router: Router ) {
    this.userName = tokenService.getUserName();
  }

  ngOnInit(): void{
    this.title = gv.CONFIGURATION.general.title;
    this.isLogged = this.tokenService.isLogued();
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

  loguin(): void
  {
    this.router.navigate(['/login']);
    this.isLogged = this.tokenService.isLogued();
  }

  go(rute: string): void {
    //this.router.navigate([rute]);
    this.router.navigate(['/candidates']);
  }

  isAdmin(){
    this.roles = this.tokenService.getAuthorities();
    this.isAdm = this.tokenService.isAdmin();

    // this.roles.forEach(role=> {
    //   if(role === 'ROLE_ADMIN'){
    //     this.isAdm = true;
    //   }
    // });

  }
}

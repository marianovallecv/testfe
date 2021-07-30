import { Component } from '@angular/core';
import { TokenService } from '../app/services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testfe';
  isAdmin!: boolean;
  isLogged!: boolean;

  constructor(
    private tokenService: TokenService,
    ) {
    this.isLogged = this.tokenService.isLogued();
    this.isAdmin = this.tokenService.isAdmin();
   }
}

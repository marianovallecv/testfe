import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isLogged!: boolean;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void{
    this.isLogged = this.tokenService.isLogued();
  }
}

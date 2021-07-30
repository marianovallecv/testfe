import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio!: number;
  compani!: string;
  web!: string;

  constructor() {
    this.anio = new Date().getFullYear();
    this.compani = 'Project Development';
    this.web = 'https:\\www.gitlab.com';
  }

  ngOnInit(): void {
  }
}

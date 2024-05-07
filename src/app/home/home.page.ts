import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
[x: string]: any;


  op1: number=0;
  op2: number=0;
  rslt!:number;

  constructor(private router:Router) {}

  addition(): void{
    this.rslt= this.op1 + this.op2;
  }

  goToMw(): void{
    this.router.navigate(['meteo-widget'])
  }

}

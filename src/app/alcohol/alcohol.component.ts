import { Component, OnInit } from '@angular/core';
import { Alcohol, AlcoholType } from '../models/Alcohol-model';
import { User } from '../models/User-model';
import { HttpService } from '../service/httpservice.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { AlcoholAddDrinkComponent } from './alcohol-add-drink/alcohol-add-drink.component';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.css']
})
export class AlcoholComponent implements OnInit {

  constructor(private alcoholService:HttpService, private router:Router) { }


  ngOnInit(): void {
    this.alcoholService.getDrink().subscribe(a => {
      console.log("Alkohol",a);

    });
  }

  createDrink():void{
    this.router.navigate(['alko/add']);
  }
  onSubmit():void{

  }
}

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

  drinks: Alcohol[] = [];
  constructor(private alcoholService:HttpService, private router:Router) { }


  ngOnInit(): void {
    this.alcoholService.getAllDrinks().subscribe(a => {
      this.drinks = a;
      console.log("Alkohol",a);

    });
  }

  createDrink():void{
    this.router.navigate(['alkohol/tilføj']);
  }
  editDrink(): void {
    this.router.navigate(['alkohol/opdater'])
  }
  onSubmit():void{

  }
}

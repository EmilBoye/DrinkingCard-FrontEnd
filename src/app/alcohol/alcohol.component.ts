import { Component, OnInit } from '@angular/core';
import { Alcohol, AlcoholType } from '../models/Alcohol-model';
import { User } from '../models/User-model';
import { HttpService } from '../service/httpservice.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { AlcoholAddDrinkComponent } from './alcohol-add-drink/alcohol-add-drink.component';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../service/authservice';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.css']
})
export class AlcoholComponent implements OnInit {
  drinks: Alcohol[] = [];

  user: HeaderComponent[] = [];
  constructor(private alcoholService:HttpService, private router:Router, private authService:AuthService) { }


  ngOnInit(): void {
    this.alcoholService.getAllDrinks().subscribe(a => {
      this.drinks = a;
      console.log("Alkohol",a);

    });
  }

  createDrink():void{
    // if(this.authService.isLoggedIn()) {
     this.router.navigate(['alkohol/tilføj']);
    //}
    //else{
      //alert("Du skal være logget ind!");
    //}
  }

  editDrink(id:any): void {
    this.router.navigate(['alkohol/opdater/',id])

  }

  deleteDrink(drinkId:any){
    this.alcoholService.deleteDrink(drinkId).subscribe(a=> {
      console.log(drinkId);
    });
  }
}

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
  searchValue: string = '';

  user: HeaderComponent[] = [];
  constructor(private alcoholService:HttpService, private router:Router, private authService:AuthService) { }


  ngOnInit(): void {
    this.alcoholService.getAllDrinks().subscribe(a => {
      this.drinks = a;
      console.log("Alkohol",a);

    });

    alert("Denne side er kun for personer over 18 år.");
  }

  createDrink():void{
    //Hvis brugeren er logget ind får man tilladelse her til at gå videre
    if(this.authService.isLoggedIn()) {
     this.router.navigate(['alkohol/tilføj']);
    }
    //Hvis brugeren ikke er logget ind får man en alert og bliver navigeret til login.
    else{
      alert("Du skal være logget ind!");
      this.router.navigate(['login']);
    }
  }

  editDrink(id:any): void {
    this.router.navigate(['alkohol/opdater/',id])

  }

  deleteDrink(drinkId:any){
    this.alcoholService.deleteDrink(drinkId).subscribe(a=> {
      console.log(drinkId);
    });
  }
  searchDrinks(): void {
    this.alcoholService.getAllDrinks().subscribe(drinks => {
      this.drinks = drinks.filter(drink =>
        drink.ingredients.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    });
}}

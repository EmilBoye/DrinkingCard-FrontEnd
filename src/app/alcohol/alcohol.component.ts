import { Component, OnInit } from '@angular/core';
import { Alcohol, AlcoholType } from '../models/Alcohol-model';
import { User } from '../models/User-model';
import { HttpService } from '../service/httpservice.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { AlcoholAddDrinkComponent } from './alcohol-add-drink/alcohol-add-drink.component';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../service/authservice';
import { LoginComponent } from '../login/login.component';
import { Rating } from '../models/Rating-model';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.css']
})
export class AlcoholComponent implements OnInit {
  drinks: Alcohol[] = [];
  searchValue: string = '';
  newComment:string = '';
  showSearch: boolean = false;

  ratings: Rating[];
  ratingComment:Rating;
  user: HeaderComponent[] = [];
  userId: number;
  selectedDrinkId: number;

  constructor(private alcoholService:HttpService, private router:Router, private authService:AuthService) { }


  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('User') || 'null');
    console.log(this.userId);

    this.alcoholService.getAllDrinks().subscribe(a => {
      this.drinks = a;
      console.log("Alkohol",a);
      this.alcoholService.getAllComments().subscribe(x=>{
        this.ratings = x;
        console.log("comment",x);

      });
    });
    this.ratingComment = new Rating();
    alert("Denne side er kun for personer over 18 år.");
  }


  createDrink():void {
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

  deleteDrink(drinkId:any): void {
    this.alcoholService.deleteDrink(drinkId).subscribe(a=> {
      console.log(drinkId);
    });
  }

  showSearchValue(): void {
    this.showSearch = true;
  }
  searchDrinks(): void {
    this.alcoholService.getAllDrinks().subscribe(drinks => {
      this.drinks = drinks.filter(drink =>
        drink.ingredients.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    });
  }
  postComment(drinkID:number):void{
    this.ratingComment.drinkId = drinkID;
    this.alcoholService.postComment(this.ratingComment).subscribe(x=>{
      const rating = new Rating();
      rating.drinkId = drinkID;
      console.log(x);
    });
  }

  selectDrink(drinkId:number):void{
    this.selectedDrinkId = drinkId;
  }

}

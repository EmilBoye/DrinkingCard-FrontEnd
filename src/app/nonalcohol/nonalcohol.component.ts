import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NonAlcohol } from '../models/NonAlcohol-model';
import { HttpService } from '../service/httpservice.service';
import { AuthService } from '../service/authservice';
import { Rating } from '../models/Rating-model';
import { User } from '../models/User-model';

@Component({
  selector: 'app-nonalcohol',
  templateUrl: './nonalcohol.component.html',
  styleUrls: ['./nonalcohol.component.css']
})
export class NonalcoholComponent implements OnInit {
  zeroDrink: NonAlcohol[] = [];
  searchValue: string = '';
  showSearch: boolean = false;
  users: User[] = [];
  userName:User;
  userId: number;

  ratings: Rating[];
  ratingComment: Rating;
  selectedDrinkId: number;

  constructor(private zeroAlcoholService:HttpService ,private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.ratingComment = new Rating();
    // Linje 22 henter data fra localStorage og ser om userId er sammen med key valuen 'User'.
    this.userId = JSON.parse(localStorage.getItem('User') || '{}');
    console.log(this.userId);

    this.zeroAlcoholService.getAllZeroDrinks().subscribe(a => {
      this.zeroDrink = a;
      this.zeroAlcoholService.getAllComments().subscribe((x)=>{
        this.ratings = x;
        console.log("comment",x);
        this.zeroAlcoholService.getAllUsers().subscribe((x) =>{
          this.users = x;
          console.log("users",x);
        });
      });
    });
  }

  createZeroDrink():void{
    //Hvis brugeren er logget ind får man tilladelse her til at gå videre
    if(this.authService.isLoggedIn()) {
      this.router.navigate(['alkoholfri/tilføj']);
     }
     //Hvis brugeren ikke er logget ind får man en alert og bliver navigeret til login.
     else{
       alert("Du skal være logget ind!");
       this.router.navigate(['login']);
     }
  }
  editZeroDrink(id:any): void {
    this.router.navigate(['alkoholfri/opdater/',id])
  }

  deleteZeroDrink(drinkId:any){
    this.zeroAlcoholService.deleteZeroDrink(drinkId).subscribe(a=> {
      console.log(drinkId);
    });
  }
  showSearchValue(): void {
    this.showSearch = true;
  }
  searchDrinks(): void {
    this.zeroAlcoholService.getAllZeroDrinks().subscribe(drinks => {
      this.zeroDrink = drinks.filter(drink =>
        drink.ingredients.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    });
  }
  postComment(drinkID:number): void {
    this.ratingComment.drinkId = drinkID;
    this.ratingComment.userId = this.userId;

    this.ratingComment.user = this.userName;

    this.zeroAlcoholService.postComment(this.ratingComment).subscribe((x)=>{
      console.log(x);

      this.zeroAlcoholService.getAllComments().subscribe((x)=>{
        this.ratings = x;
      });
    });
  }
  selectDrink(drinkId:number): void {
    this.selectedDrinkId = drinkId;
  }
}

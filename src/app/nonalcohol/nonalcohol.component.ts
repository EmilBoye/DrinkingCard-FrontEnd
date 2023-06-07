import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NonAlcohol } from '../models/NonAlcohol-model';
import { HttpService } from '../service/httpservice.service';
import { AuthService } from '../service/authservice';

@Component({
  selector: 'app-nonalcohol',
  templateUrl: './nonalcohol.component.html',
  styleUrls: ['./nonalcohol.component.css']
})
export class NonalcoholComponent implements OnInit {
  zeroDrink: NonAlcohol[] = [];
  searchValue: string = '';
  showSearch: boolean = false;

  userId: number;

  constructor(private zeroAlcoholService:HttpService ,private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('User') || '{}');
    console.log(this.userId);

    this.zeroAlcoholService.getAllZeroDrinks().subscribe(a => {
      this.zeroDrink = a;
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
}

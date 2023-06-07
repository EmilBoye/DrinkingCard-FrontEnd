import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NonAlcohol } from '../models/NonAlcohol-model';
import { HttpService } from '../service/httpservice.service';

@Component({
  selector: 'app-nonalcohol',
  templateUrl: './nonalcohol.component.html',
  styleUrls: ['./nonalcohol.component.css']
})
export class NonalcoholComponent implements OnInit {
  zeroDrink: NonAlcohol[] = [];
  searchValue: string = '';
  showSearch: boolean = false;
  constructor(private zeroAlcoholService:HttpService ,private router:Router) { }

  ngOnInit(): void {
    this.zeroAlcoholService.getAllZeroDrinks().subscribe(a => {
      this.zeroDrink = a;
    });
  }
  // zeroDrinks: any = {
  //   id: 0,
  //   author: '',
  //   title: '',
  //   description: '',
  //   featuredImageUrl: '',
  //   ingredients: '',
  //   visible: false,
  //   publishDate: new Date(),
  //   updatedDate: new Date()
  // }
  
  


  createZeroDrink():void{
    this.router.navigate(['alkoholfri/tilføj']);
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

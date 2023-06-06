import { Component, OnInit } from '@angular/core';
import { Alcohol, AlcoholType } from 'src/app/models/Alcohol-model';
import { HttpService } from 'src/app/service/httpservice.service';

@Component({
  selector: 'app-alcohol-add-drink',
  templateUrl: './alcohol-add-drink.component.html',
  styleUrls: ['./alcohol-add-drink.component.css']
})
export class AlcoholAddDrinkComponent implements OnInit {
  alcoholPost: Alcohol[] = [];

  constructor(private alcoholService:HttpService) { }
  drink: any = {
    id: 0,
    author: '',
    title: '',
    description: '',
    featuredImageUrl: '',
    strength: '',
    ingredients: '',
    alcoholType: null,
    visible: false,
    publishDate: new Date(),
    updatedDate: new Date()
  }
  ngOnInit(): void {

  }
  createDrink():void{
    if(this.drink.title.length >= 5 && this.drink.author && this.drink.ingredients.length > 0){
      // this.addIngredient();
      this.alcoholService.postDrink(this.drink).subscribe((createdDrink:any) => {
        this.drink = createdDrink;
        const createdDrinkId: number = createdDrink.id;


        this.drink = createdDrinkId;
      });
    }
    else{
      alert("Titlen skal være mere eller lig med 5 karakter")
    }
  }
  // addIngredient(ingredient: string): void {
  //   this.drink.ingredients.push(ingredient);
  // }
  // this.addIngredient(this.drink.ingredients);
  // this.addIngredient(this.drink.ingredients);

  // addIngredient(): void {
  //   if(this.drink.ingredients){
  //     const ingredientArray = this.drink.ingredients.split('. ');
  //     this.drink.ingredients = ingredientArray.join('.\n');
  //   }
  // }
}

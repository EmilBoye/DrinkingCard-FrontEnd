import { Component, OnInit } from '@angular/core';
import { NonAlcohol } from 'src/app/models/NonAlcohol-model';
import { HttpService } from 'src/app/service/httpservice.service';

@Component({
  selector: 'app-nonalcohol-add-drink',
  templateUrl: './nonalcohol-add-drink.component.html',
  styleUrls: ['./nonalcohol-add-drink.component.css']
})
export class NonalcoholAddDrinkComponent implements OnInit {

  nonAlcoholPost: NonAlcohol[] = [];

  constructor(private nonAlcoholService:HttpService) { }
  zeroDrink: any = {
    id: 0,
    author: '',
    title: '',
    description: '',
    featuredImageUrl: '',
    ingredients: '',
    visible: false,
    publishDate: new Date(),
    updatedDate: new Date()
  }
  ngOnInit(): void {

  }

  createDrink():void{
    if(this.zeroDrink.title.length >= 5 && this.zeroDrink.author){
      this.nonAlcoholService.postZeroDrink(this.zeroDrink).subscribe( a => {
        this.zeroDrink = a;
      });
    }
    else{
      alert("Titlen skal være mere eller lig med 5 karakter")
    }
  }
}

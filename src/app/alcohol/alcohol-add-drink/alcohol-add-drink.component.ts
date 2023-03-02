import { Component, OnInit } from '@angular/core';
import { Alcohol, AlcoholType } from 'src/app/models/Alcohol-model';
import { User } from 'src/app/models/User-model';
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
    alcoholType: AlcoholType.Vodka,
    visible: false,
    publishDate: new Date(),
    updatedDate: new Date()
  }
  ngOnInit(): void {
  }

  onSubmit():void{
    if(this.drink.title.length >= 5 && this.drink.author){
      this.alcoholService.postDrink(this.drink).subscribe(a => {
        console.log(this.drink);
      });
    }
    else{
      alert("Titlen skal være mere eller lig med 5 karakter!");
    }
  }
}

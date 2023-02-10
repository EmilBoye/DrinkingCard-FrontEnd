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
  alcoholPost: Alcohol[];
  constructor(private alcoholService:HttpService) { }
  drink: Alcohol = {
    alcoId: 0,
    author: '',
    title: '',
    description: '',
    featuredImageUrl: '',
    strength: '',
    ingredients: '',
    alcoholType: AlcoholType.Vodka,
    visible: false,
    user: new User,
    publishDate: new Date(),
    updatedDate: new Date()
  }
  ngOnInit(): void {
  }

  onSubmit():void{
    this.alcoholService.postDrink(this.drink).subscribe(a => {
      console.log(this.drink);

    });
  }
}

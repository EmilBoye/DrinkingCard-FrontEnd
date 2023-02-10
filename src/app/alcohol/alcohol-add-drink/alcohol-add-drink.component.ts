import { Component, OnInit } from '@angular/core';
import { Alcohol, AlcoholType } from 'src/app/models/Alcohol-model';
import { User } from 'src/app/models/User-model';

@Component({
  selector: 'app-alcohol-add-drink',
  templateUrl: './alcohol-add-drink.component.html',
  styleUrls: ['./alcohol-add-drink.component.css']
})
export class AlcoholAddDrinkComponent implements OnInit {
  alcoholPost: Alcohol[];
  constructor() { }
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
    publishDate: undefined,
    updatedDate: undefined
  }
  ngOnInit(): void {
  }

  onSubmit():void{

  }
}

import { Component, OnInit } from '@angular/core';
import { Alcohol, AlcoholType } from '../models/Alcohol-model';
import { User } from '../models/User-model';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.css']
})
export class AlcoholComponent implements OnInit {

  constructor() { }

  alcoholPost: Alcohol =
  {
    alcoId: 0,
    author: '',
    title: '',
    description: '',
    featuredImageUrl: '',
    strength: '',
    ingredients: '',
    alcoholType: AlcoholType.ALÉ,
    visible: true,
    user: new User
  }
  ngOnInit(): void {
  }

}

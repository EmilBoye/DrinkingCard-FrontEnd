import { Component, OnInit } from '@angular/core';
import { Alcohol, AlcoholType } from 'src/app/models/Alcohol-model';
import { User } from 'src/app/models/User-model';
import { HttpService } from 'src/app/service/httpservice.service';

@Component({
  selector: 'app-alcohol-update-drink',
  templateUrl: './alcohol-update-drink.component.html',
  styleUrls: ['./alcohol-update-drink.component.css']
})
export class AlcoholUpdateDrinkComponent implements OnInit {

  alcoholUpdate: Alcohol[] = [];
  constructor(private alcoholService:HttpService) { }
  Test: Alcohol = {
    alcoId: 0,
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
  onSubmit(): void {
    this.alcoholService.updateDrink(this.Test?.alcoId, this.Test).subscribe(a => {
      console.log(a);

      this.alcoholUpdate = a;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private alcoholService:HttpService, router:Router, public actRoute:ActivatedRoute) { }
  updateDrink: any = {
    alcoId: this.actRoute.snapshot.params['id'],
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


  getDrink(){
    return this.alcoholService.getDrinkById(this.updateDrink.alcoId).subscribe((Drink:{}) => {
      this.updateDrink = Drink;
    })
  }
  onSubmit(): void {
    console.log(this.updateDrink.title);
    if(this.updateDrink.title.length >= 5 && this.updateDrink.author){

      this.alcoholService.updateDrink(this.updateDrink?.alcoId, this.updateDrink).subscribe(data => {
        console.log(data);

        this.alcoholUpdate = data;
      });

    }
    else{
      alert("Titlen skal være mere eller lig med 5 karakter!");
    }
  }
}

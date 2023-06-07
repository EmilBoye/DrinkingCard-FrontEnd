import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NonAlcohol } from 'src/app/models/NonAlcohol-model';
import { HttpService } from 'src/app/service/httpservice.service';

@Component({
  selector: 'app-nonalcohol-update-drink',
  templateUrl: './nonalcohol-update-drink.component.html',
  styleUrls: ['./nonalcohol-update-drink.component.css']
})
export class NonalcoholUpdateDrinkComponent implements OnInit {

  nonAlcoholUpdate: NonAlcohol[] = [];
  constructor(private nonAlcoholService:HttpService, router:Router, public actRoute:ActivatedRoute) { }
  updateDrink: any = {
    id: this.actRoute.snapshot.params['id'],
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


  // Denne metode henter drink når folk vil opdaterer deres drink.
  // Så kan programmet hente id'et til den drink de har oprettet
  getDrink(){
    return this.nonAlcoholService.getDrinkById(this.updateDrink.alcoId).subscribe((Drink:{}) => {
      this.updateDrink = Drink;
    });
  }

  // onSubmit metoden sørger for at opdaterer drinken korrekt.
  // Der er sat noget begrænsning på ved hjælp af et if-else statement som gør at der skal være titel samt bruger.
  onSubmit(): void {
    console.log(this.updateDrink);
    if(this.updateDrink.title.length >= 5 && this.updateDrink.author){
      this.nonAlcoholService.updateZeroDrink(this.updateDrink?.id, this.updateDrink).subscribe(data => {
        console.log(data);
        this.nonAlcoholUpdate = data;
      });
    }
    else{
      alert("Titlen skal være mere eller lig med 5 karakter!");
    }
  }
}

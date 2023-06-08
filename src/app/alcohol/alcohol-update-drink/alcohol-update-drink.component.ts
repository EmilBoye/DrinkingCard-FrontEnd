import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alcohol, AlcoholType } from 'src/app/models/Alcohol-model';
import { HttpService } from 'src/app/service/httpservice.service';

@Component({
  selector: 'app-alcohol-update-drink',
  templateUrl: './alcohol-update-drink.component.html',
  styleUrls: ['./alcohol-update-drink.component.css']
})
export class AlcoholUpdateDrinkComponent implements OnInit {

  alcoholUpdate: Alcohol[] = [];
  constructor(private alcoholService:HttpService, router:Router, public actRoute:ActivatedRoute) { }

  //Any er bare et objekt som er tomt. Den får kun de værdier man selv indsætter.
  updateDrink: any = {
    id: this.actRoute.snapshot.params['id'],
    author: '',
    authorId: 0,
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
    // Så henter den alle værdier og viser det.
    this.getDrink();
  }


  // Denne metode henter drink når folk vil opdaterer deres drink.
  // Så kan programmet hente id'et til den drink de har oprettet
  getDrink(){
    return this.alcoholService.getDrinkById(this.updateDrink.id).subscribe((Drink:{}) => {
      this.updateDrink = Drink;
    });
  }

  // onSubmit metoden sørger for at opdaterer drinken korrekt.
  // Der er sat noget begrænsning på ved hjælp af et if-else statement som gør at der skal være titel samt bruger.
  onSubmit(): void {
    console.log(this.updateDrink);
    if(this.updateDrink.title.length >= 5 && this.updateDrink.author){
      this.alcoholService.updateDrink(this.updateDrink?.id, this.updateDrink).subscribe(data => {
        console.log(data);
        this.alcoholUpdate = data;
      });
    }
    else{
      alert("Titlen skal være mere eller lig med 5 karakter!");
    }
  }
}

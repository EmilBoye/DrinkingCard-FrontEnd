import { Component, OnInit } from '@angular/core';
import { Alcohol } from '../models/Alcohol-model';
import { NonAlcohol } from '../models/NonAlcohol-model';
import { User } from '../models/User-model';
import { HttpService } from '../service/httpservice.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  drinks: Alcohol[] = [];
  drinkszero: NonAlcohol[] = [];
  users: User[] = [];

  constructor(private alcoholService: HttpService) { }

  ngOnInit(): void {
    this.alcoholService.getAllDrinks().subscribe(alcoholicDrinks => {
      this.drinks = alcoholicDrinks;
      console.log(alcoholicDrinks);
      this.shuffleAndSliceDrinks();
    });

    this.alcoholService.getAllZeroDrinks().subscribe(nonAlcoholicDrinks => {
      this.drinkszero = nonAlcoholicDrinks;
      console.log(nonAlcoholicDrinks);
      this.shuffleAndSliceDrinks();
    });
  }

  shuffleAndSliceDrinks(): void {
    if (this.drinks.length > 0 && this.drinkszero.length > 0) {
      this.drinks = this.shuffleArray(this.drinks).slice(0, 3);
      this.drinkszero = this.shuffleArray(this.drinkszero).slice(0, 3);
    }
  }

  shuffleArray(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

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
  drinkszero : NonAlcohol[] = [];
  users: User[] = [];

  constructor(private alcoholService:HttpService) { }

  ngOnInit(): void {
     this.alcoholService.getAllDrinks().subscribe(data => {
      this.drinks = data.sort(() => Math.random() - Math.random()).slice(0, 3);
    });
    this.alcoholService.getAllZeroDrinks().subscribe(data => {
      this.drinkszero = data.sort(() => Math.random() - Math.random()).slice(0, 3);
    });
      
  }
}

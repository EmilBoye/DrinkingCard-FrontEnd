import { Component, OnInit } from '@angular/core';
import { Alcohol } from '../models/Alcohol-model';
import { User } from '../models/User-model';
import { HttpService } from '../service/httpservice.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  drinks: Alcohol[] = [];
  users: User[] = [];

  constructor(private alcoholService:HttpService) { }

  ngOnInit(): void {
    this.alcoholService.getAllDrinks().subscribe(data => {

      this.drinks = data;
      console.log(data);
    })
  }
}

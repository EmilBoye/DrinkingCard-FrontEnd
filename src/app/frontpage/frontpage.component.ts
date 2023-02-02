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

  alcoholDrinks: Alcohol[] = [];
  users: User[] = [];

  constructor(private alcoholService:HttpService) { }

  ngOnInit(): void {
    this.alcoholService.getAlcohol().subscribe(data => {

      this.alcoholDrinks = data;
      console.log(data);
    })

    this.alcoholService.getUser().subscribe(data=> {
      this.users = data;
      console.log(data);

    })
  }

}

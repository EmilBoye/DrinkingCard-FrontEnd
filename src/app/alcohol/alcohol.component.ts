import { Component, OnInit } from '@angular/core';
import { Alcohol, AlcoholType } from '../models/Alcohol-model';
import { User } from '../models/User-model';
import { HttpService } from '../service/httpservice.service';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.css']
})
export class AlcoholComponent implements OnInit {

  constructor(private alcoholService:HttpService) { }


  ngOnInit(): void {
    this.alcoholService.getDrink().subscribe(a => {
      console.log("Alkohol",a);

    });
  }

  createDrink():void{

  }
  onSubmit():void{

  }
}

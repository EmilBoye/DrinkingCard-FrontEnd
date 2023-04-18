import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NonAlcohol } from '../models/NonAlcohol-model';
import { HttpService } from '../service/httpservice.service';

@Component({
  selector: 'app-nonalcohol',
  templateUrl: './nonalcohol.component.html',
  styleUrls: ['./nonalcohol.component.css']
})
export class NonalcoholComponent implements OnInit {
  zeroDrink: NonAlcohol[] = [];
  constructor(private zeroAlcoholService:HttpService ,private router:Router) { }

  ngOnInit(): void {
    this.zeroAlcoholService.getAllZeroDrinks().subscribe(a => {
      this.zeroDrink = a;
    });
  }


  createZeroDrink():void{
    this.router.navigate(['alkoholfri/tilføj']);
  }
  editZeroDrink(id:any): void {
    this.router.navigate(['alkoholfri/opdater/',id])
  }

  deleteZeroDrink(drinkId:any){
    this.zeroAlcoholService.deleteZeroDrink(drinkId).subscribe(a=> {
      console.log(drinkId);
    });
  }
}

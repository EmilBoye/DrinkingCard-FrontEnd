import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nonalcohol',
  templateUrl: './nonalcohol.component.html',
  styleUrls: ['./nonalcohol.component.css']
})
export class NonalcoholComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  createDrink():void{
    this.router.navigate(['alkohol/tilføj']);
  }
  editDrink(id:any): void {
    this.router.navigate(['alkohol/opdater/',id])

  }
}

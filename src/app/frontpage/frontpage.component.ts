import { Component, OnInit } from '@angular/core';
import { Alcohol } from '../models/Alcohol-model';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  alcoholDrinks: Alcohol[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Alcohol } from '../models/Alcohol-model';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.css']
})
export class AlcoholComponent implements OnInit {

  alcohol:Alcohol[] = [];
  isVisible:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}

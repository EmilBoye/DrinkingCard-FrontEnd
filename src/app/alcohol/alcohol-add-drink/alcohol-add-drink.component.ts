import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alcohol } from 'src/app/models/Alcohol-model';
import { HttpService } from 'src/app/service/httpservice.service';

@Component({
  selector: 'app-alcohol-add-drink',
  templateUrl: './alcohol-add-drink.component.html',
  styleUrls: ['./alcohol-add-drink.component.css']
})
export class AlcoholAddDrinkComponent implements OnInit {

  alcoholPost: Alcohol | undefined;
  constructor(private alcoholService: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const id = params.get('id');

      if(id) {
        this.alcoholService.getDrink().subscribe(response => {
          this.alcoholPost;
          console.log(response);

        });
      }
    })
  }

}

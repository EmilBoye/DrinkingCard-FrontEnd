import { Component, OnInit } from '@angular/core';
import { Alcohol, AlcoholType } from 'src/app/models/Alcohol-model';
import { User } from 'src/app/models/User-model';
import { HttpService } from 'src/app/service/httpservice.service';

@Component({
  selector: 'app-alcohol-add-drink',
  templateUrl: './alcohol-add-drink.component.html',
  styleUrls: ['./alcohol-add-drink.component.css']
})
export class AlcoholAddDrinkComponent implements OnInit {
  alcoholPost: Alcohol[] = [];

  constructor(private alcoholService:HttpService) { }

  // drink er en variable med typen any. Det er de ting der skal bruges til at oprette en drink.
  drink: any = {
    id: 0,
    author: '',
    authorId: 0,
    title: '',
    description: '',
    featuredImageUrl: '',
    strength: '',
    ingredients: '',
    alcoholType: null,
    visible: false,
    publishDate: new Date(),
    updatedDate: new Date()
  }
  ngOnInit(): void {

  }
  createDrink():void{
    // Tjekker om titlen er mere eller lig med 5 og at ingredienserne er større end 0.
    if(this.drink.title.length >= 5 && this.drink.ingredients.length > 0){
      // henter brugerens id fra localStorage. Hvis oplysningerne ikke kan findes vil auhtorId forblive 0.
      this.drink.authorId = JSON.parse(localStorage.getItem('User')|| '{}');
      // Sender en asynkron anmodning. For at få brugeren baseret på author id.
      this.alcoholService.getUserById(this.drink.authorId).subscribe(user =>{
        this.drink.author = user.username;
        console.log(this.drink.author);
        //Poster drinken.
        this.alcoholService.postDrink(this.drink).subscribe((createdDrink:any) => {
          this.drink = createdDrink;
        });
      });
    }
    else{
      alert("Titlen skal være mere eller lig med 5 karakter")
    }
  }
  onSubmitFeaturedImage(event: any) {
    if(event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.drink.featuredImageUrl = e.target.result;
      }
    }
  };
}

import { Component, OnInit } from '@angular/core';
import { Alcohol, AlcoholType } from '../models/Alcohol-model';
import { User } from '../models/User-model';
import { HttpService } from '../service/httpservice.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { AlcoholAddDrinkComponent } from './alcohol-add-drink/alcohol-add-drink.component';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../service/authservice';
import { LoginComponent } from '../login/login.component';
import { Rating } from '../models/Rating-model';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.css']
})
export class AlcoholComponent implements OnInit {
  drinks: Alcohol[] = [];
  searchValue: string = '';
  newComment: string = '';
  showSearch: boolean = false;

  ratings: Rating[];
  ratingComment: Rating;
  users: User[] = [];

  userName: User;
  userId: number;
  selectedDrinkId: number;

  constructor(private alcoholService: HttpService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.ratingComment = new Rating();
    this.userId = JSON.parse(localStorage.getItem('User') || 'null');
    console.log(this.userId);

    this.alcoholService.getAllDrinks().subscribe((a) => {
      this.drinks = a;
      console.log("Alkohol", a);
      this.alcoholService.getAllComments().subscribe((x) => {
        this.ratings = x;
        console.log("comment", x);
        this.alcoholService.getAllUsers().subscribe((x) =>{
          this.users = x;
          console.log("users",x);
        });
      });
    });
    alert("Denne side er kun for personer over 18 år.");
  }

  // Opretter en drink. Med hjælp af authService som har nogle metoder og i dette tilfælde IsLoggedIn.
  createDrink(): void {
    //Hvis brugeren er logget ind får man tilladelse her til at gå videre
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['alkohol/tilføj']);
    }
    //Hvis brugeren ikke er logget ind får man en alert og bliver navigeret til login.
    else {
      alert("Du skal være logget ind!");
      this.router.navigate(['login']);
    }
  }

  // Her er en metode til at komme over på rediger drink siden. Den navigerer med hjælp af router og tjekker med id.
  // Programmet ved allerede hvem der har oprettet drinken.
  editDrink(id: any): void {
    this.router.navigate(['alkohol/opdater/', id]);
  }

  deleteDrink(drinkId: any): void {
    this.alcoholService.deleteDrink(drinkId).subscribe((a) => {
      console.log(drinkId);
    });
  }

  showSearchValue(): void {
    this.showSearch = true;
  }

// searchDrinks-metoden henter alle drinks ved hjælp af getAllDrinks.
// Når resultatet er modtaget, abonnerer den på listen af drikke og filtrerer dem baseret på en betingelse.
// Betinelsen søger efter en delstreng i drink.ingredients ved hjælp af includes-metoden.
  searchDrinks(): void {
    this.alcoholService.getAllDrinks().subscribe((drinks) => {
      this.drinks = drinks.filter((drink) =>
        drink.ingredients.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    });
  }

  // Tjekker om drinkId og userId matcher.
  // For at kunne en kommentar som en anden bruger tjekkes brugernavnet også
  postComment(drinkID: number): void {
    this.ratingComment.drinkId = drinkID;
    this.ratingComment.userId = this.userId;
    // Assign the username of the current user to the ratingComment
    this.ratingComment.user = this.userName;

    this.alcoholService.postComment(this.ratingComment).subscribe((x) => {
      console.log(x);

      // Refresh the comments after posting a new comment
      this.alcoholService.getAllComments().subscribe((x) => {
        this.ratings = x;
      });
    });
  }

  selectDrink(drinkId: number): void {
    this.selectedDrinkId = drinkId;
  }
}

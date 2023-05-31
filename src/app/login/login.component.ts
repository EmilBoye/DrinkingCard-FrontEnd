import { Component, OnInit } from '@angular/core';
import { User } from '../models/User-model';
import { Alcohol } from '../models/Alcohol-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../service/httpservice.service';
import { AuthService } from '../service/authservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  userChecked: Boolean = false;
  constructor(private service:HttpService, private authService:AuthService) { }

  user:User = {
    id: 0,
    roleid: 0,
    role: undefined,
    username: '',
    passwordhash: '',
    author: new Alcohol
  }
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    passwordHash: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.userChecked = this.authService.isLoggedIn();

    this.service.getAllUsers().subscribe((userLoggedIn) => {
      this.users = userLoggedIn;
    })
  }

  onLogin():void{
    console.warn("loginForm", this.user);
  }

  onSubmitLogin(): void {
    /* De to linjer der er her tager og tjekker værdien for username og passwordet.
    Da man prøver at tildele variablerne en mulig værdi med undefined så kan man benytte sig af
    en så kan man benytte sig af nullish coalescing operatoren "??"  som giver en fallback
    */
    console.log(this.loginForm.value.userName, this.loginForm.value.passwordHash);
    this.user.username = this.loginForm.value.userName ?? '';
    this.user.passwordhash = this.loginForm.value.passwordHash ?? '';
    var userFilter = this.users.filter(u => u.username == this.user.username && u.passwordhash == this.user.passwordhash);

    // Test med userFilter for at se om der er data i.
    if(this.users.length > 0){
      console.log("Test",userFilter);
    }

    if(userFilter.length === 0){
      alert("Forkert brugernavn eller adgangskode");
      this.userChecked = false;
    }
    else if(userFilter.length === 1){
      this.userChecked = true;
      this.authService.login(this.user.username, this.user.passwordhash);
      this.service.getUserById(userFilter[0].id).subscribe();
      console.log("Bruger navn",this.user.username);
      this.loginForm.reset();
      window.localStorage.setItem('User',userFilter[0].id.toString());

      alert("Du er nu logget ind");

      this.userChecked = false;
    }
  }
}

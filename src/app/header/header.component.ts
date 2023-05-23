import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Role, RoleType } from '../models/Role-model';
import { User } from 'src/app/models/User-model';
import { HttpService } from '../service/httpservice.service';
import { Alcohol } from '../models/Alcohol-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  users: User[] = [];
  userChecked: boolean = true;
  showCreateModal = false;
  showLoginModal = false;

  user:User = {
    id: 0,
    roleid: 0,
    role: undefined,
    username: '',
    passwordhash: '',
    author: new Alcohol
  }
  constructor(private service:HttpService, private formBuilder:FormBuilder) { }


  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    passwordHash: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((userLoggedIn) => {
      this.users = userLoggedIn;
    })
  }
  onCreate():void{
    this.showCreateModal = true;
    console.log("User", this.user);

    // console.warn("createUserForm",this.createUserForm.value);
  }
  onLogin():void{
    this.showLoginModal = true;
    console.warn("loginForm", this.user);
  }
  onSubmitCreate():void{
    console.log(this.user.passwordhash.length, this.user.username.length);
    if(this.user.passwordhash.length >= 8 && this.user.username >= "3"){
      this.service.postUser(this.user).subscribe(res=>{
        console.log("Post",this.user);
        window.location.reload();
      })
    }
    else{
        alert("Brugernavn skal være minimum 3 karakter langt, og adgangskoden skal være mere eller lig med 8");
    }
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
    console.log(userFilter);

    if(userFilter.length == 0){
      alert("Forkert brugernavn eller adgangskode");
      this.userChecked = false;
    }
    else if(userFilter.length == 1){
      this.userChecked = true;
      this.service.postUser(userFilter[0].id).subscribe();
      console.log(this.user.username);
      this.loginForm.reset();
      window.localStorage.setItem('User',userFilter[0].id.toString());
      window.location.reload();
      alert("Du er nu logget ind");

      this.userChecked = false;
    }
  }
  onLogout(): void {

    window.localStorage.removeItem('User');
    window.location.reload();
    console.log(this.userChecked);
  }
}

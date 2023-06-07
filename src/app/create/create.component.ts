import { Component, OnInit } from '@angular/core';
import { User } from '../models/User-model';
import { Alcohol } from '../models/Alcohol-model';
import { HttpService } from '../service/httpservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NonAlcohol } from '../models/NonAlcohol-model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  users: User[] = [];
  userChecked: boolean = true;
  showCreateModal = false;
  showLoginModal = false;

  user:any = {
    id: 0,
    roleid: 0,
    role: undefined,
    username: '',
    passwordhash: '',
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

}

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Role, RoleType } from '../models/Role-model';
import { User } from 'src/app/models/User-model';
import { HttpService } from '../service/httpservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  createUserForm: any = new FormGroup({});
  users: User[] = [];
  confirmPass: any;
  @Input() nyBruger = {userId: 0, roleId: 0, role:RoleType.User, userName: "", passwordHash: ""}
  userChecked: boolean = true;
  showCreateModal = false;
  showLoginModal = false;
  userId: number[] = [];

  constructor(private service:HttpService, private formBuilder:FormBuilder) { }


  loginForm = new FormGroup({
    userId: new FormControl(0),
    roleId: new FormControl(0),
    userName: new FormControl('', [Validators.required]),
    passwordHash: new FormControl('', [Validators.required]),
    roleType: new FormControl(RoleType.User),

  });

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
        userName: new FormControl('', [Validators.required]),
        role: new FormControl(RoleType.User),
        passwordHash: new FormControl('', [Validators.required]),
        confirmPass: new FormControl('')
    });
    this.service.getAllUsers().subscribe(u=>this.users = u);


  }
  onCreate():void{
    this.showCreateModal = true;
    console.warn("createUserForm",this.createUserForm.value);
  }
  onLogin():void{
    this.showLoginModal = true;
    console.warn("loginForm", this.loginForm.value);

  }
  onSubmitCreate():void{
    this.confirmPass = this.createUserForm.get('confirmPass');
      if(this.createUserForm.value.passwordHash?.length >= 8 && this.createUserForm.value.userName){
        alert("Brugeren er oprettet");

        this.service.postUser(this.createUserForm.value).subscribe(user => console.log(user));
        if(this.createUserForm.value.userName.length < 1){
          alert("Du skal skrive dit brugernavn korrekt. Minimum 3 karakter");
        }
      }
      else{
        if(this.createUserForm.value.passwordHash?.length < 8 ){
          alert("Adgangskoden skal være minimum 8 karakter langt.");
        }
      }
  }
  onSubmitLogin(): void {
    var userFilter = this.users.filter(u => u.userName == this.loginForm.value.userName && u.passwordHash == this.loginForm.value.passwordHash);

    if(userFilter.length == 0){
      alert("Forkert brugernavn eller adgangskode");
      this.userChecked = false;
    }

    else if(userFilter.length == 1){
      this.userChecked = true;
      this.service.postUser(this.nyBruger).subscribe();
      this.loginForm.reset();
      window.localStorage.setItem('User', userFilter[0].id.toString());
      window.location.reload();
      alert("Du er nu logget ind!");
      this.userChecked = false;
    }
    //this.userObject.userName = this.loginForm.value.userName;
    this.service.getUserById(this.nyBruger.userId).subscribe(response=>{
      if(response){
        console.log(response);
        this.users = response;
      }
    })
  }
  /*const nameToPost = {
      userName:'Emil',
      passwordHash:'123456789'
    }*/
}

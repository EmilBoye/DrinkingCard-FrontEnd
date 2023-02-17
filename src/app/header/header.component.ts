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
        passwordHash: new FormControl('', [Validators.required]),
    });
    this.service.getAllUsers().subscribe(u=>this.users = u);

    // var placeholder = localStorage.getItem('User');
    // this.userId = placeholder == null ? 0 : parseInt(placeholder);

    // if(this.userId){

    // }
    // else{

    // }
  }
  onCreate():void{
    this.showCreateModal = true;
    console.warn("createUserForm",this.createUserForm.value);

    // this.service.getUser().subscribe(response => {console.log(response);
    // })

  }
  onLogin():void{
    this.showLoginModal = true;
    //this.userObject.userName = this.loginForm.value.userName;
    this.service.getAllUsers().subscribe(response=>{
      if(response){
        console.log(response);
        this.users = response;
      }
    })
    // if(this.confirmPass.value == this.loginForm.value.passwordHash){
    //   if(this.loginForm.value.passwordHash?.length)
    //   {

    //   }
    // }


  }
  onSubmit():void{
    this.confirmPass = document.getElementById("confirmAccPass") as HTMLInputElement;
    if(this.confirmPass.value == this.createUserForm.value.passwordHash){
      if(this.createUserForm.value.passwordHash?.length >= 8 && this.createUserForm.value.userName){
        alert("Brugeren er oprettet");

        this.service.postUser(this.createUserForm.value).subscribe(user => console.log(user));
      }
      else{
        if(this.createUserForm.value.userName.length < 1){
          alert("Du skal skrive dit brugernavn korrekt. Minimum 3 karakter");
        }
        else{
          alert("Adgangskoden skal være minimum 8 karakter langt.");
        }
      }
    }
  }
  /*const nameToPost = {
      userName:'Emil',
      passwordHash:'123456789'
    }*/
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleType } from '../models/Role-model';
import { User } from 'src/app/models/User-model';
import { HttpService } from '../service/httpservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  users: User[] = [];
  confirmPass: any;
  userObject: User = {UserId: 0, roleId: 0, role:RoleType.User, userName: "", passwordHash: ""}
  userChecked: boolean = true;
  showCreateModal = false;
  showLoginModal = false;
  userId: number[] = [];

  constructor(private service:HttpService) { }

  createUserForm = new FormGroup({
    UserId: new FormControl(),
    roleId: new FormControl(),
    role: new FormControl(RoleType.User),
    userName: new FormControl('', [Validators.required]),
    passwordHash: new FormControl('', [Validators.required]),


  });

  loginForm = new FormGroup({
    UserId: new FormControl(0),
    roleId: new FormControl(0),
    userName: new FormControl('', [Validators.required]),
    passwordHash: new FormControl('', [Validators.required]),

    RoleType: new FormControl(RoleType.User),

  });

  ngOnInit(): void {
    // this.service.getUser().subscribe(u=>this.users = u);

    // var placeholder = localStorage.getItem('User');
    // this.userId = placeholder == null ? 0 : parseInt(placeholder);

    // if(this.userId){

    // }
    // else{

    // }
  }
  onCreate():void{
    this.showCreateModal = true;
    console.warn(this.createUserForm.value);
    this.service.getUser().subscribe(response => {console.log(response);
    })
    this.service.postUser(this.userObject).subscribe(response=>{console.log(response);
    })
  }
  onLogin():void{
    this.showLoginModal = true;
    //this.userObject.userName = this.loginForm.value.userName;
    if(this.confirmPass.value == this.loginForm.value.passwordHash){
      if(this.loginForm.value.passwordHash?.length)
      {

      }
    }
    this.service.getUser().subscribe(response=>{
      if(response){
        console.log(response);
        this.users = response;
      }
    })


  }
  // onSubmit():void{
  //   console.log("Knap virker");
  //   this.service.getUser().subscribe(respone =>{
  //     console.log(respone);
  //     ;
  //   })
  // }
  /*const nameToPost = {
      userName:'Emil',
      passwordHash:'123456789'
    }*/
}

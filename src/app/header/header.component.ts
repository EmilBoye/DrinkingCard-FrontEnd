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
  //users: User[];
  confirmPass: any;
  userObj: User = {UserId: 0, roleId: 0, role:RoleType.User, userName: "", passwordHash: ""}
  userChecked: boolean = true;
  //userId: number;

  constructor(private service:HttpService) { }

  createUserForm = new FormGroup({
    userName: new FormControl(this.userObj.userName, [Validators.required]),
    passwordHash: new FormControl(''),
  });
  loginForm = new FormGroup({

  });

  ngOnInit(): void {
  }
  onCreate(userinfo:string):void{
    this.service.postUser(userinfo).subscribe(response=>{
      console.log(response);

    })
  }
  onSubmit():void{
    console.log("Knap virker");
    this.service.getAllUser().subscribe(respone =>{
      console.log(respone);
      ;
    })
  }
}

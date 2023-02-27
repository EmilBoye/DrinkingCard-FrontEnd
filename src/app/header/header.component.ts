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
  // createUserForm: any = new FormGroup({});
  // users: User[] = [];
  // // confirmPass: any;
  // @Input() nyBruger = {roleId: 0, role:RoleType.User, userName: "", passwordHash: ""}
  userChecked: boolean = true;
  showCreateModal = false;
  showLoginModal = false;
  userId: number;


  user:any = {
    id:0,
    roleId:0,
    role:RoleType.User,
    userName:'',
    passwordHash:''
  }
  constructor(private service:HttpService, private formBuilder:FormBuilder) { }


  loginForm = new FormGroup({
    userId: new FormControl(),
    roleId: new FormControl(),
    userName: new FormControl('', [Validators.required]),
    passwordHash: new FormControl('', [Validators.required]),
    roleType: new FormControl(RoleType.User),

  });

  ngOnInit(): void {
    // this.createUserForm = this.formBuilder.group({
    //   roleId: new FormControl(''),
    //   userName:new FormControl('', [Validators.required]),
    //   role:this.formBuilder.control(RoleType.User),
    //   passwordHash:new FormControl('', [Validators.required]),
    // });


  }
  onCreate():void{
    this.showCreateModal = true;
    console.log("User", this.user.value);

    // console.warn("createUserForm",this.createUserForm.value);
  }
  onLogin():void{
    this.showLoginModal = true;
    console.warn("loginForm", this.loginForm.value);

    this.service.getAllUsers().subscribe(u=>{
      console.log(u);

    });
  }
  onSubmitCreate():void{
    // this.confirmPass = this.createUserForm.get('confirmPass');

    if(this.user.valid){
      this.service.postUser(this.user).subscribe(res=>{
        this.user = res;
        console.log(this.user);

      })
    }
      // if(this.createUserForm.value.passwordHash?.length >= 8 && this.createUserForm.value.userName){
      //   alert("Brugeren er oprettet");

      //   //this.service.postUser(this.createUserForm.value).subscribe(user => console.log(user));
      //   if(this.createUserForm.value.userName.length < 1){
      //     alert("Du skal skrive dit brugernavn korrekt. Minimum 3 karakter");
      //   }
      // }
      // else{
      //   if(this.createUserForm.value.passwordHash?.length < 8 ){
      //     alert("Adgangskoden skal være minimum 8 karakter langt.");
      //   }
      // }
  }
  onSubmitLogin(id:number): void {
    //this.userObject.userName = this.loginForm.value.userName;
    this.service.getUserById(id).subscribe(response=>{
      if(response){
        console.log(response);

      }
    })
  }
  /*const nameToPost = {
      userName:'Emil',
      passwordHash:'123456789'
    }*/
}

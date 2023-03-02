import { RouterLink } from "@angular/router";
import { Alcohol } from "./Alcohol-model";
import { Role, RoleType } from "./Role-model";

export class User{
  public id : number;
  public roleid : number;
  public role? : RoleType;
  public username : string;
  public author : Alcohol;
  public passwordhash : string;
}

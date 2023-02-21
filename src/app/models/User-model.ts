import { RouterLink } from "@angular/router";
import { Alcohol } from "./Alcohol-model";
import { Role, RoleType } from "./Role-model";

export class User{
  public id : number;
  public roleId : number;
  public role : RoleType;
  public userName : string;
  public author : Alcohol;
  public passwordHash : string;
}

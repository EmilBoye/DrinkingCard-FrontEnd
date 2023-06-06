import { RouterLink } from "@angular/router";
import { Alcohol } from "./Alcohol-model";
import { Role, RoleType } from "./Role-model";
import { NonAlcohol } from "./NonAlcohol-model";

export class User{
  public id : number;
  public roleid : number;
  public role? : RoleType;
  public username : string;
  public alcohol : Alcohol;
  public nonalcohol: NonAlcohol;
  public passwordhash : string;
}

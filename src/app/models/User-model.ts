import { RouterLink } from "@angular/router";
import { Role, RoleType } from "./Role-model";

export class User{
  public userId : number;
  public roleId : number;
  public role : RoleType;
  public userName? : string;
  public passwordHash? : string;
}

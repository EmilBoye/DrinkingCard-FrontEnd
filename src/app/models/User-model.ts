import { RouterLink } from "@angular/router";
import { Role, RoleType } from "./Role-model";

export interface User{
  UserId : number;
  roleId : number;
  role : RoleType;
  userName : string;
  passwordHash : string;
}

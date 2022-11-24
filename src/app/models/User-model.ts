import { RouterLink } from "@angular/router";
import { Role } from "./Role-model";

export interface User{
  UserId : number;
  roleId : number;
  role : Role;
  userName : string;
  passwordHash : string;
}

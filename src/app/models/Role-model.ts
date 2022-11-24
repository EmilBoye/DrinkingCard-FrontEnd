export enum RoleType{
  Guest = 10,
  User = 20,
  Admin = 30
}
export interface Role{
  roleId : number;
  roleType : RoleType;
  level : number;
}

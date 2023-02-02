export enum RoleType{
  Guest = 10,
  User = 20,
  Admin = 30
}
export class Role{
  public roleId : number;
  public roleType : RoleType;
  public level : number;
}

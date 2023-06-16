import { User } from "./User-model";

export class Rating{
  public id:number;
  public user:User;
  public comment:string;
  public publishedComment:Date;
  public drinkId:number;
  public userId:number;
}

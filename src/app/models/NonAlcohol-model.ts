import { User } from "./User-model";

export interface NonAlcohol{
  NonAlcoId:number;
  Author?:string;
  Title?:string;
  Description?:string;
  Ingredients?:string
  Visible:boolean;
  user?:User
  PublishDate?:Date;
  UpdatedDate?:Date;
}

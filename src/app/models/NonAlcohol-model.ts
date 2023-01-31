import { User } from "./User-model";

export class NonAlcohol{
  public nonAlcoId:number;
  public author?:string;
  public title?:string;
  public description?:string;
  public ingredients?:string
  public visible:boolean;
  public user:User
  public publishDate?:Date;
  public updatedDate?:Date;
}

import { User } from "./User-model";

export interface NonAlcohol{
  nonAlcoId:number;
  author?:string;
  title?:string;
  description?:string;
  ingredients?:string
  visible:boolean;
  user:User
  publishDate?:Date;
  updatedDate?:Date;
}

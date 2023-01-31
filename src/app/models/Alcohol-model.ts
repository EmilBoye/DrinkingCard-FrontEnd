import { User } from "./User-model";

export enum AlcoholType{
  Vodka = 1,
  Gin,
  Tequila,
  Pilsner,
  Classic,
  IPA,
  PALÈ,
  ALÉ,
  Mørk_Rom,
  Lys_Rom,
  Hvid_Rom,
  Whiskey,
  Rødvin,
  Hvidvin,
  Granvin,
  Portvin,
  Rosévin,
  Champagne,
}

export interface Alcohol{
  alcoId:number;
  author?:string;
  title?:string;
  description?:string;
  strength?:string;
  ingredients?:string
  alcoholType:AlcoholType;
  visible:boolean;
  //UserId:number;
  user:User
  publishDate?:Date;
  updatedDate?:Date;
}

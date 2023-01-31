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
  AlcoId:number;
  Author?:string;
  Title?:string;
  Description?:string;
  Strength?:string;
  Ingredients?:string
  alcoholType:AlcoholType;
  Visible:boolean;
  //UserId:number;
  user:User
  PublishDate?:Date;
  UpdatedDate?:Date;
}

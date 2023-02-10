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

export class Alcohol{
  public alcoId:number;
  public author:string;
  public title:string;
  public description:string;
  public featuredImageUrl:string;
  public strength:string;
  public ingredients:string
  public alcoholType:AlcoholType;
  public visible:boolean;
  //UserId:number;
  public user:User
  public publishDate:Date |undefined;
  public updatedDate:Date | undefined;
}

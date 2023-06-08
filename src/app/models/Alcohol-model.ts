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
  public id:number;
  public author:string;
  public authorId: number;
  public title:string;
  public description:string;
  public featuredImageUrl:string;
  public strength:string;
  public ingredients:string
  public alcoholType:AlcoholType;
  public visible:boolean;
  public publishDate:Date;
  public updatedDate:Date;
}

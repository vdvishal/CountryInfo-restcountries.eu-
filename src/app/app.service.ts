import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable()
export class AppService {
  public baseUrl = "https://restcountries.eu/rest/v2/"

  constructor(private http:HttpClient) { }

  public getAll(){
    let myResponse = this.http.get(this.baseUrl+"all");
    return myResponse;
  }

  public getRegionInfo(region):any{
    let myResponse = this.http.get(this.baseUrl+"region"+"/"+region);
    return myResponse;
  }

  public getRegionList():any{
    let myResponse = this.http.get("assets/region.JSON");
    return myResponse;
  }

  public getCountryInfo(code):any{
    let myResponse = this.http.get(this.baseUrl+"alpha"+"/"+code);
    return myResponse;
  }

  public getInfoByCurrency(code):any{
    let myResponse = this.http.get(this.baseUrl+"currency"+"/"+code);
    return myResponse;
  }

  public getInfoByLanguage(code):any{
    let myResponse = this.http.get(this.baseUrl+"lang"+"/"+code);
    return myResponse;
  }


}

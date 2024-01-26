import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaracterServiceService {

  urlCasa: string = "" 
  constructor(private http:HttpClient) { }

  getCasas$(): Observable<any>{

    return this.http.get("https://anapioficeandfire.com/api/houses")
    }

  guardarCasa(url:string):void{
    this.urlCasa= url
  }

  getMiembros$(): Observable<any>{
    console.log(this.urlCasa)
    return this.http.get(this.urlCasa)
  }

  getMiembro$(urlMiembro: string): Observable<any>{
    console.log(urlMiembro)
    return this.http.get(urlMiembro)
  }

  getImagen$():Observable<any>{
    return this.http.get("https://dog.ceo/api/breed/hound/images/random")
  }
}


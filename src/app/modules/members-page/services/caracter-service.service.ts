import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaracterServiceService {

  constructor(private http:HttpClient) { }

  getCaracter$(ruta: string):Observable<any>{
    return this.http.get(ruta)
  }
}

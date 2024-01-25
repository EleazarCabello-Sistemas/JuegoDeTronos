import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getCasas$(): Observable<any>{
    return this.http.get("https://anapioficeandfire.com/api/houses")
  }
}

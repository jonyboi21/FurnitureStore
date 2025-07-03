import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {furniture} from "./furniture";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchfurniture(): Observable<furniture[]>{
    return this.http.get<furniture[]>(`http://localhost:8080/api/v1/furniture`)
  }

  fetchfurnitureById(id: number): Observable<furniture> {
    return this.http.get<furniture>(`http://localhost:8080/api/v1/furniture/${id}`)
  }

  updatefurniture(id: number,furniture: furniture): Observable<furniture>{
    return this.http.put<furniture>(`http://localhost:8080/api/v1/furniture/${id}`, furniture)
  }




}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = '../../assets/data.json';
  constructor(private http: HttpClient) { }
  getdata<T>() {
    return this.http.get(`${this.baseUrl}`)
  }
}

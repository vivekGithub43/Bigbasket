import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { apiConstants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class CustomService {
  constructor(private http:HttpClient) { }
  getAllProducts(){
  return this.http.get(environment.apiUrl+apiConstants.Get_AllProducts);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIRESPONSE } from './master';
import { environment } from '../environments/environment.development';
import { apiConstants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

constructor(private http : HttpClient) { }

getAllProducts():Observable<APIRESPONSE>{
return this.http.get<APIRESPONSE>(environment.apiUrl+apiConstants.Get_AllProducts)
}
getAllCategories():Observable<APIRESPONSE>{
return this.http.get<APIRESPONSE>(environment.apiUrl+apiConstants.Get_AllCategory)
}
createProduct(obj:any):Observable<APIRESPONSE>{
return this.http.post<APIRESPONSE>(environment.apiUrl+apiConstants.Create_Product,obj)
}

}

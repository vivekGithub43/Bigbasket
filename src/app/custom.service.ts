import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { APIRESPONSE } from './master';
import { environment } from '../environments/environment.development';
import { apiConstants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

constructor(private http : HttpClient) { }
public cartUpdated$:Subject<boolean>=new Subject();

getAllProducts():Observable<APIRESPONSE>{
return this.http.get<APIRESPONSE>(environment.apiUrl+apiConstants.Get_AllProducts)
}
getAllCategories():Observable<APIRESPONSE>{
return this.http.get<APIRESPONSE>(environment.apiUrl+apiConstants.Get_AllCategory)
}
createProduct(obj:any):Observable<APIRESPONSE>{
return this.http.post<APIRESPONSE>(environment.apiUrl+apiConstants.Create_Product,obj)
}
updateProduct(obj:any):Observable<APIRESPONSE>{
return this.http.put<APIRESPONSE>(environment.apiUrl+apiConstants.Update_Product,obj)
}
DeleteProduct(id: any): Observable<APIRESPONSE> {
  return this.http.delete<APIRESPONSE>(`${environment.apiUrl}${apiConstants.Delete_Product}${id}`);
}
GetAllSaleByCustomerId(id: number): Observable<APIRESPONSE> {
  return this.http.get<APIRESPONSE>(`${environment.apiUrl}${apiConstants.Get_AllSaleByCustomerId}${id}`);
}
AddToCart(obj:any):Observable<APIRESPONSE>{
return this.http.post<APIRESPONSE>(environment.apiUrl+apiConstants.Add_ToCart,obj)
}
RegisterCustomer(obj:any):Observable<APIRESPONSE>{
return this.http.post<APIRESPONSE>(environment.apiUrl+apiConstants.Register_Customer,obj)  
}
Login(obj:any):Observable<APIRESPONSE>{
return this.http.post<APIRESPONSE>(environment.apiUrl+apiConstants.Login_,obj)
}
USER_TOKEN_LOGIN(obj:any){
  return this.http.post(environment.API_END_POINT_USER+apiConstants.USER_TOKEN_LOGIN,obj)
}
GetCartProducts_ByCustomerId(custId:number):Observable<APIRESPONSE>{
  return this.http.get<APIRESPONSE>(environment.apiUrl+apiConstants.GetCartProducts_ByCustomerId+custId)
}

}

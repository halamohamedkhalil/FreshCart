import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcomdataService {

  constructor( private _HttpClient:HttpClient) { }

  getAllProducts(): Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  getproductDetails(id:string) : Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }

  getCategories(): Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

  getCategoriesDetails(id:string |null): Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  }

  getBrands(): Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }

  getBrandsDetails(id:string |null): Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
  }

  forgetPassword(userEmail:object): Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, userEmail)
  }

  resetCode(resetCode:object): Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, resetCode)
  }

  resetPassword(resetPasswordForm:object): Observable<any>
  {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`, resetPasswordForm)
  }

}

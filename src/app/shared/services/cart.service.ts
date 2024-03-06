import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }


  addToCart(Id:string):Observable<any> {

    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
      {productId:Id } , 
      
    )
  }

  getUserCart():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`, 
    
    )
  }

  removeItem(id:string):Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,
     
     )
  }

  updateCart(id:string, count:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,
    {"count":count},
    
    )
  }

  checkOut(cardId:string , userData:object):Observable<any>
  {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=http://localhost:4200`,
      {
        "shippingAddress": userData
      },
      

    )
  }


}

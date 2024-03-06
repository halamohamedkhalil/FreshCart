import { CartService } from './../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  

  constructor(private _CartService:CartService){}

  cartDetails:any = {};

  removeCartItem(id:string):void{
    this._CartService.removeItem(id).subscribe({
      next: (response) => {
        console.log(response.data);
        this.cartDetails = response.data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.cartDetails = response.data; // {  totalCartPrice, products:[{count,price,product:{}}]}
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  changeCount( id:string , countProduct:number):void{
    if (countProduct >0){
      this._CartService.updateCart(id , countProduct).subscribe({
        next:(respone)=>{
        console.log(respone.data)
        this.cartDetails = respone.data
      },
      error:(err)=>{
        console.log(err)
      }
      })
    }
  }

}

import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
   

  constructor ( 
    private _EcomdataService:EcomdataService,
    private _ToastrService: ToastrService,
    private _CartService:CartService ,

    ) {}
    
  products:Product[] = [];


  ngOnInit(): void {
    this._EcomdataService.getWishList().subscribe({
      next: (response)=>{
        console.log(response);
        this.products = response.data;
      }
    })
    }

  addWish(prodId:string|undefined):void{
    this._EcomdataService.addToWishList(prodId).subscribe({
      next: (response)=>{
        console.log(response);
        this._ToastrService.success(response.message)
  
        }    
    } )
  }  

  addCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next: (response) => { 
        console.log(response);
         this._ToastrService.success(response.message)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  

}

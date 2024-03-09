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
  wishListData:string[] = [];


  ngOnInit(): void {
    this._EcomdataService.getWishList().subscribe({
      next: (response)=>{
        console.log(response);
        this.products = response.data;
      }
    })

    this._EcomdataService.getWishList().subscribe({
      next: (response)=>{
       // console.log(response.data);
        const newData = response.data.map( (item:any)=>item._id)

        // console.log(newData); 

        this.wishListData = newData
      }
    });
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
  
  removeWish(prodId:string|undefined):void{
    this._EcomdataService.removeWishList(prodId).subscribe({
      next: (response)=>{
        console.log(response);
        this._ToastrService.success(response.message)
        this.wishListData = response.data
        
        // console.log('before' , this.products);
        const mewProductsData = this.products.filter( (item:any)=> this.wishListData.includes(item._id))
        // console.log( 'after', mewProductsData)

        this.products = mewProductsData;
      } 
    } )
  }

}

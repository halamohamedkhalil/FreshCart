import { CartService } from './../../shared/services/cart.service';
import { Category } from './../../shared/interfaces/product';
import { EcomdataService } from './../../shared/services/ecomdata.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor( 
    private _EcomdataService:EcomdataService ,
    private _CartService:CartService ,
    private _ToastrService:ToastrService
    
    ) {}

  products:Product[] = [];

  Categories:any[] =[];
  searchTerm:string ='';
  
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



  ngOnInit(): void {
    //get All Products
     this._EcomdataService.getAllProducts().subscribe({
      next : (response:any)=>{
        console.log(response.data);
        this.products = response.data
      },
    });

    //get categories
    this._EcomdataService.getCategories().subscribe( {
      next: (response)=>{
        console.log(response);
        this.Categories = response.data;

      }
    })
    
  }
}

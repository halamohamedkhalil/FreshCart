import { CartService } from './../../shared/services/cart.service';
import { Category } from './../../shared/interfaces/product';
import { EcomdataService } from './../../shared/services/ecomdata.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor( 
    private _EcomdataService:EcomdataService ,
    private _CartService:CartService ,
    private _ToastrService:ToastrService
    
    ) {}

  products:Product[] = [];

  Categories:any[] =[];
  searchTerm:string ='';
  wishListData:string[] = [];
  
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

  CategoriesSliderOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    items:1,
    nav: false
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
    this._EcomdataService.getCategories().subscribe({
      next: (response)=>{
        console.log(response);
        this.Categories = response.data;

      }
    })
  }

  addWish(prodId:string|undefined):void{
    this._EcomdataService.addToWishList(prodId).subscribe({
      next: (response)=>{
        console.log(response);
        this._ToastrService.success(response.message)
        this.wishListData = response.data
      }    
    } )
  }

  removeWish(prodId:string|undefined):void{
    this._EcomdataService.removeWishList(prodId).subscribe({
      next: (response)=>{
        console.log(response);
        this._ToastrService.success(response.message)
        this.wishListData = response.data
      }    
    } )
  }
}

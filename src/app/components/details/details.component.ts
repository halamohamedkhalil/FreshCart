import { Product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from './../../shared/services/ecomdata.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor( private _ActivatedRoute:ActivatedRoute ,
    private _EcomdataService:EcomdataService){}


    productDetais:Product = {} as Product;

    productSlider: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      autoplay:true,
      items:1,
      nav: true
    }

  ngOnInit(){
    this._ActivatedRoute.paramMap.subscribe( {
      next : (params)=>{
          let idProduct:any = params.get('id');

          // api 
          this._EcomdataService.getproductDetails(idProduct).subscribe( {
            next :(response)=>{
              console.log(response.data);
              this.productDetais = response.data;
            }
          })


          console.log(idProduct);
      }
    })
  }

}

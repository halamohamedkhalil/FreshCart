import { Brand } from './../../shared/interfaces/product';
import { EcomdataService } from './../../shared/services/ecomdata.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brandsdetails',
  templateUrl: './brandsdetails.component.html',
  styleUrls: ['./brandsdetails.component.css']
})
export class BrandsdetailsComponent  {
  
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _EcomdataService:EcomdataService
  ){}

  brandId:string |null = '';
  BrandDetails:Brand = {} as Brand

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.brandId = params.get('id');
      }
    });

    this._EcomdataService.getBrandsDetails(this.brandId).subscribe({
      next:(response)=>{
        console.log(response.data);
        this.BrandDetails = response.data;
      }
    })}
}

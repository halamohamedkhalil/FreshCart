import { EcomdataService } from './../../shared/services/ecomdata.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor(private _EcomdataService:EcomdataService){}

  brands:any[] =[];
  ngOnInit(): void {
    //get categories
    this._EcomdataService.getBrands().subscribe({
      next: (response)=>{
        console.log(response);
        this.brands = response.data;

      }
    })}
}

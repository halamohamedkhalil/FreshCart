import { EcomdataService } from './../../shared/services/ecomdata.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Category } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent {

  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _EcomdataService:EcomdataService
  ){}

  categoryId:string |null = '';
  categoryDetails:Category = {} as Category

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.categoryId = params.get('id');
      }
    });

    this._EcomdataService.getCategoriesDetails(this.categoryId).subscribe({
      next:(response)=>{
        console.log(response.data);
        this.categoryDetails = response.data;
      }
    })


  }


}

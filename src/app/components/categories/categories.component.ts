import { EcomdataService } from './../../shared/services/ecomdata.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'
]
})
export class CategoriesComponent implements OnInit {

  constructor(private _EcomdataService:EcomdataService){}

  Categories:any[] =[];
  ngOnInit(): void {
    //get categories
    this._EcomdataService.getCategories().subscribe({
      next: (response)=>{
        console.log(response);
        this.Categories = response.data;

      }
    })}

}

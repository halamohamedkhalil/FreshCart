import { Brand } from './../../shared/interfaces/product';
import { EcomdataService } from './../../shared/services/ecomdata.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
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
  @Input() brandDetails:Brand = {} as Brand;
  
}

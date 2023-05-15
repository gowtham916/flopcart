import { product } from 'data-types';

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined | product[];
  constructor(private products:ProductService){}
  ngOnInit(): void {
    this.products.productList().subscribe((result)=>{
      console.warn(result);
      if(result){
        this.productList = result;
      }
    })
  }
  deleteProduct(id:number):void{
    console.warn(id);
  }

}

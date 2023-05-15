import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { product } from 'data-types';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  @ViewChild('addProduct', { static: true }) addProduct!: NgForm;
  successMessage: string | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  submit(data: product): void {
    console.log(data);
    this.productService.addproduct(data).subscribe((result) => {
      if (result) {
        this.successMessage = 'Product is added successfully';
        this.addProduct.resetForm(); // Clear the form values
      }
    });

    setTimeout(() => {
      this.successMessage = undefined;
    }, 3000);
  }
}



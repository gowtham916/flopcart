import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { signUp } from 'data-types';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  sellerLoginForm: FormGroup<any> = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  showLogin=false;
  constructor(private seller:SellerService,private fb: FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.seller.reloadSeller;
      this.sellerLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  signUp(data:signUp):void{
    this.seller.userSignUp(data);
  }
  opensignIn():void{
    this.router.navigate(['seller-signin']);
  }
  
  

}

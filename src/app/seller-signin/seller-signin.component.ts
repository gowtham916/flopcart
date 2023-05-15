import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-signin',
  templateUrl: './seller-signin.component.html',
  styleUrls: ['./seller-signin.component.css']
})
export class SellerSigninComponent implements OnInit {
  loginfail = false;
  sellerLoginForm: FormGroup<any> = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private seller:SellerService,private fb: FormBuilder,private router:Router){}
  
  ngOnInit(): void {
    this.seller.reloadSeller;
      this.sellerLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  login(data:any):void{
    this.seller.userLogin(data);
    this.seller.isLogginError.subscribe((isError)=>{
      if(isError){
        this.loginfail = true;
      }
    })
  }

  opensignUp():void{
    this.router.navigate(['seller-auth']);
  }
  

}

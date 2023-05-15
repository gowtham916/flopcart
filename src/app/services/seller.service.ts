import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login, signUp } from 'data-types';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isLogginError = new EventEmitter<boolean>(false);
  isSellerLoggedIn= new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient, private router:Router) { 
    this.reloadSeller();
  }
  userSignUp(data:signUp){
    this.http.post('http://localhost:3000/seller',data,{observe:'response'}).subscribe((result)=>{
      console.warn(result)
      if(result){
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller',JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      }
    })
    
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      console.log('there is a user')
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
  userLogin(data:login){
    console.log(data.email)
    console.log(data.password)
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
      console.log("Response body: ", result.body);
      if(result && result.body && result.body.length === 1){
        console.log("Login success");
        this.isSellerLoggedIn.next(true);
        this.isLogginError.emit(false);
        localStorage.setItem('seller',JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
        }else{
         this.isLogginError.emit(true);
         console.log("Login fail");
       }
    })
  }
}

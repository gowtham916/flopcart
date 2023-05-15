import { SellerService } from './services/seller.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
 @Injectable({
  providedIn: 'root'
 })
 export class AuthGuard implements CanActivate{
  constructor(private SellerService:SellerService){

  }
   canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(localStorage.getItem('seller')){
        return true;
      }
      return this.SellerService.isSellerLoggedIn;
   }

  
 }

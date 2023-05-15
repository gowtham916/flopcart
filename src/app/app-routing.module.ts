import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerSigninComponent } from './seller-signin/seller-signin.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';

const routes: Routes = [
  {
    component:HomeComponent,path:''
  },{
    component:SellerAuthComponent,path:'seller-auth'
  },
  {
    component:SellerHomeComponent,path:'seller-home',canActivate:[AuthGuard]
  },
  {
    component:SellerSigninComponent,path:'seller-signin'
  },
  {
    component:SellerAddProductComponent,path:'seller-add-product',canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
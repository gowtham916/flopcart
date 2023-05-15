import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menutype:string = 'default'
  sellerName:string = ''
  constructor(private route:Router){

  }
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        console.log(val.url);
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          let sellerStorage = localStorage.getItem('seller');
          let sellerData = sellerStorage && JSON.parse(sellerStorage)[0];
          this.sellerName = sellerData.name;
          this.menutype = 'seller'
        }else{
          this.menutype = 'default'
        }
      }
      
    })
  }
  isUserLogedIn():void{
    if(localStorage.getItem('seller')){
      this.route.navigate(['seller-home']);
    }else{
      this.route.navigate(['seller-auth'])
    }
  }
  logout():void{
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }

}

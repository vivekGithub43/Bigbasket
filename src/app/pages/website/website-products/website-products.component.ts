import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { APIRESPONSE, Products } from '../../../master';
import { CustomService } from '../../../custom.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './website-products.component.html',
  styleUrl: './website-products.component.css'
})
export class WebsiteProductsComponent implements OnInit{
products:Products[]=[];
customServ=inject(CustomService);
ngOnInit(): void {
  this.getProducts();
}  
getProducts(){
    this.customServ.getAllProducts().subscribe((res:APIRESPONSE)=>{
this.products=res.data;
    })
  }
}

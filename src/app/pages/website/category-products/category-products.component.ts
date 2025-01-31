import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomService } from '../../../custom.service';
import { APIRESPONSE, Products } from '../../../master';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent implements OnInit{
activatedRoute=inject(ActivatedRoute);
router=inject(Router);
customServ=inject(CustomService);
activatedCategoryId:number=0;
categoryIdProduct:any[]=[];
products:Products[]=[];
resultCategoryData:any[]=[];
constructor(){
  this.activatedRoute.params.subscribe((res:any)=>{
    console.log(res,'res');
    this.activatedCategoryId=res.id;
    console.log(this.activatedCategoryId,'catId');
    
    this.getProducts();
   
  })
}
ngOnInit(): void {

}  

getProducts(){
  this.customServ.getAllProducts().subscribe((res:APIRESPONSE)=>{
    this.products=res.data;
    console.log(this.products,'products');
    this.filterCategoryById();
  })
}
filterCategoryById() {
  if (this.products.length > 0) {
    this.resultCategoryData = this.products.filter(
      (x) => x.categoryId ===  Number(this.activatedCategoryId)
    );
    console.log(this.resultCategoryData, 'Filtered Products');
  } else {
    console.warn('Products array is empty');
  }
}
}

import { Component, inject, OnInit } from '@angular/core';
import { CustomService } from '../../../custom.service';
import { APIRESPONSE, Category, Products } from '../../../master';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
isexpandSide:boolean=false; 
customServ=inject(CustomService);
products:Products[]=[];
categories:Category[]=[];
productFormObj:Products=new Products();
productsForm:FormGroup=new FormGroup({});
ngOnInit(): void {
  this.getProducts();
  this.getCategory();
this.productsForm=new FormGroup({
  productId:   new FormControl(0),
    productSku: new FormControl(''),
    productName: new FormControl(''),
    productPrice:  new FormControl(0),
    productShortName: new FormControl(''),
    productDescription:new FormControl(''),
    createdDate:    new FormControl(new Date().toISOString()),
    deliveryTimeSpan:new FormControl(''),
    categoryId:     new FormControl(0),
    productImageUrl:new FormControl(''),
    categoryName:   new FormControl(''),
})
}  
getProducts(){
  this.customServ.getAllProducts().subscribe((res:APIRESPONSE)=>{
    this.products=res.data;
    console.log(this.products);
  })
}
getCategory(){
  this.customServ.getAllCategories().subscribe((res:APIRESPONSE)=>{
    this.categories=res.data;
  })
}
onSave(){
const formData=this.productsForm.value;
formData.productId=formData.productId || 0;
formData.createdDate=new Date(formData.createdDate || new Date()).toISOString();
this.customServ.createProduct(this.productsForm.value).subscribe((res:APIRESPONSE)=>{
  if(res.result){
    alert('saved successfully');
    this.getProducts();
  }else{
    alert('Something wrong try later');
  }
})
}
onEdit(x:any){
this.isexpandSide=true;
this.productsForm.patchValue({
  productId: x.productId,
  productSku: x.productSku,
  productName: x.productName,
  productPrice: x.productPrice,
  productShortName: x.productShortName,
  productDescription:x.productDescription,
  createdDate:   x.createdDate,
  deliveryTimeSpan:x.deliveryTimeSpan,
  categoryId:   x.categoryId,
  productImageUrl:x.productImageUrl,
  categoryName: x.categoryName
})
}
reset(){
this.productsForm.reset();
}
new(){
this.isexpandSide=true;
}
close(){
this.isexpandSide=false;
}
}

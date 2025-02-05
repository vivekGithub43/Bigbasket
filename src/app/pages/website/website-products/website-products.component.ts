import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { APIRESPONSE, loggedinCustomer, Products } from '../../../master';
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
  quantity: Products = new Products;
customServ=inject(CustomService);
loggedinCustomer:loggedinCustomer={};
ngOnInit(): void {
  this.getProducts();
};
addToCart(x:Products){
  const Login_cust = sessionStorage.getItem('logged_Customer');
    console.log('Stored logged_Customer:', Login_cust);
  if(Login_cust !==null){
this.loggedinCustomer=JSON.parse(Login_cust);
  
  const addtocartObj={
    "CartId":0,
  "CustId": this.loggedinCustomer.custId,
  "ProductId": x.productId,
  "Quantity": x.quantity,
  "AddedDate":new Date()
  }
  this.customServ.AddToCart(addtocartObj).subscribe((res:APIRESPONSE)=>{
if(res.result){
confirm(res.message);
console.log(res.message,'added');
this.customServ.cartUpdated$.next(true);
}else{
  res.message
}
  });
}
};
getProducts(){
    this.customServ.getAllProducts().subscribe((res:APIRESPONSE)=>{
this.products=res.data.map((product: any) => {
  return { ...product, quantity: 1 }; 
});
    })
  }
decrement(x:Products){
if(x.quantity >1){
  x.quantity--;
}
}  
increment(x:Products){
  if (x.quantity < 10) { 
    x.quantity++;
  }
}

}

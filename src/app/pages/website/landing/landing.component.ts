import { Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import { CustomService } from '../../../custom.service';
import { APIRESPONSE, Category, loggedinCustomer, LoginFormObj, Products, registerObject } from '../../../master';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Modal } from 'bootstrap'; 
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
customServ= inject(CustomService);
registerFormObj:registerObject=new registerObject();
categories:Category[]=[];
isNavbarCollapsed:boolean=true;
displayRegisterModel:boolean=false;
showDailouge:boolean=false;
LoginFormObj:LoginFormObj=new LoginFormObj();
loggedinCustomer:loggedinCustomer={};
cartList:any[]=[];
@ViewChild('registerModel') registerModel!: ElementRef; 
constructor(){
  const loggedDatacust=sessionStorage.getItem('logged_Customer');
  if(loggedDatacust !==null){
  this.loggedinCustomer=JSON.parse(loggedDatacust);
  this.getCartProductsbyCustomerId(this.loggedinCustomer.custId!);
  console.log(this.cartList,'cartList');
  };
  this.customServ.cartUpdated$.subscribe((res:any)=>{
    if(res){
      this.getCartProductsbyCustomerId(this.loggedinCustomer.custId!);
    }
  })
}
  ngOnInit(): void {
   this.getCategories();

  };
  
getCategories(){
  this.customServ.getAllCategories().subscribe((res:APIRESPONSE)=>{
    this.categories=res.data;
    console.log(this.categories);
  })
}
  toogleNavigation(){
    this.isNavbarCollapsed = !this.isNavbarCollapsed
  }
  onregisterForm(form:any){
  this.customServ.RegisterCustomer(this.registerFormObj).subscribe((res:APIRESPONSE)=>{
    if (res.result) {
      confirm(res.message);
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement) {
        activeElement.blur();
      }
      const modalElement = this.registerModel.nativeElement;
      const modalInstance = Modal.getInstance(modalElement) || new Modal(modalElement);
      modalInstance.hide();
      setTimeout(() => {
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
          document.body.classList.remove('modal-open');  
        }
      }, 300); 
    }else{
      confirm(res.message || 'something wrong!!!')
    }
  })
  }


onLogin(data:any){
this.customServ.Login(this.LoginFormObj).subscribe((res:APIRESPONSE)=>{
if(res.result){
confirm(res.message);
this.loggedinCustomer=res.data;
sessionStorage.setItem('logged_Customer',JSON.stringify(this.loggedinCustomer))
console.log(this.loggedinCustomer,'loggedIncustomer');
const storedCustomer = sessionStorage.getItem('logged_Customer');
    console.log('Stored logged_Customer:', storedCustomer);
}else{
confirm(res.message || 'wrong ')
}
})    
}  
getCartProductsbyCustomerId(custid:number){
this.customServ.GetCartProducts_ByCustomerId(custid).subscribe((res:APIRESPONSE)=>{
  this.cartList=res.data;
  console.log(this.cartList,'cartList');
})
}

}

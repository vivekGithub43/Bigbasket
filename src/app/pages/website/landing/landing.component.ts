import { Component, inject, OnInit} from '@angular/core';
import { CustomService } from '../../../custom.service';
import { APIRESPONSE, Category, Products, registerObject } from '../../../master';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule,DialogModule],
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
  registerForm(para:any){
this.customServ.RegisterCustomer(this.registerFormObj).subscribe((res:APIRESPONSE)=>{
if(res.result){
  confirm(res.message);
  this.closeRegisterModel();
}else{
  confirm(res.message)
}
})
}
openModel(){
this.displayRegisterModel=true;
}
closeRegisterModel(){
 this.displayRegisterModel= false;
}  

showDialog(){
  this.showDailouge=true;
}
}

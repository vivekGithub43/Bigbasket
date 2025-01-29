import { Component, inject, OnInit } from '@angular/core';
import { CustomService } from '../../../custom.service';
import { APIRESPONSE, Category, Products } from '../../../master';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
customServ= inject(CustomService);

categories:Category[]=[];
  isNavbarCollapsed:boolean=true;
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
}

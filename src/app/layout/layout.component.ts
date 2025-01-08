import { Component, inject, OnInit } from '@angular/core';
import { CustomService } from '../custom.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FormsModule,RouterOutlet,RouterLink,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
products:any[]=[];
customServ=inject(CustomService);
ngOnInit(): void {
  this.customServ.getAllProducts().subscribe((res:any)=>{
this.products=res.data;
console.log(res.data);
  }); 
}  
headerList:any=[
  {id:1,name:'Get the app'},
  {id:2,name:'Investor Relation'},
  {id:3,name:'Add Resturent'},
  {id:4,name:'Login'},
  {id:5,name:'SignUp'}
]
}

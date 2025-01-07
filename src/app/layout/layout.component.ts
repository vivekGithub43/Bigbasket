import { Component, inject, OnInit } from '@angular/core';
import { CustomService } from '../custom.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
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
  })
}  

}

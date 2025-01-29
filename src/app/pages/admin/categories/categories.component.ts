import { Component, inject, OnInit } from '@angular/core';
import { CustomService } from '../../../custom.service';
import { map, Observable } from 'rxjs';
import { CATEGORIES } from '../../../master';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
customServ=inject(CustomService);
categories$:Observable<any> 
constructor(){
  this.categories$=this.customServ.getAllCategories().pipe(
    map((item:any)=>{
      return item.data;
    }))
}
ngOnInit(): void {
 
}  



}

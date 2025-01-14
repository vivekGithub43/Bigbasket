import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
router= inject(Router);
loginForm:any[]=[];
 form={
  userName:'',
  password:''
 }
ngOnInit(): void {
   
} 
onSubmit(res:any){
console.log(res.value);
if(this.form.userName == "vivek" && this.form.password == "password"){
  this.router.navigate(['products']);
  alert('login success')
}else(
  alert('wrong credentials')
)
}

}

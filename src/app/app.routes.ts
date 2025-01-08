import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [
    {
     path:'',redirectTo:'layout',pathMatch:'full'
    },
    {
     path:'layout',component:LayoutComponent
    },
    {path:'',component:HomeComponent,
    children:[
        {path:'categories',component:CategoriesComponent},
        {path:'products',component:ProductsComponent}
            ]
    }
];

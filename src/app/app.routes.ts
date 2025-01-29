import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { WebsiteProductsComponent } from './pages/website/website-products/website-products.component';

export const routes: Routes = [
    {path:'',
     redirectTo:'shop',
     pathMatch:'full'   
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LandingComponent,
        children:[
            {path:'products/:id', component:CategoryProductsComponent},
            {path:'AllProducts',component:WebsiteProductsComponent}
        ]
    },
    {
        path:'',component:LayoutComponent,
        children:[
            {path:'websiteproducts',component:WebsiteProductsComponent},
            {path:'categories',component:CategoriesComponent}
        ]
    }
];

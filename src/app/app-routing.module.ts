import { BrandsdetailsComponent } from './components/brandsdetails/brandsdetails.component';
import { CategorydetailsComponent } from './components/categorydetails/categorydetails.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailsComponent } from './components/details/details.component';
import { authGuard } from './shared/guards/auth.guard';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { CartsComponent } from './components/carts/carts.component';
import { HomeComponent } from './components/home/home.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',
    canActivate: [authGuard] ,
    component:BlankLayoutComponent, children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'cart',component:CartsComponent},

    {path:'setting', loadChildren:()=>import('./setting/setting.module').then( (m)=>m.SettingModule )},

    {path:'products',component:ProductsComponent},
    {path:'allorders',component:AllordersComponent},
    {path:'checkout/:id',component:CheckoutComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'brands',component:BrandsComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'brandsdetails/:id',component:BrandsdetailsComponent},
    {path:'categorydetails/:id',component:CategorydetailsComponent}

  ]},
  {path:'', component:AuthLayoutComponent, children:[
    {path:'login', component:LoginComponent},
    {path:'register',component:RegisterComponent},
  ]},

  {path: '**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

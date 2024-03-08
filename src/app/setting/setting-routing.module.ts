import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';

const routes: Routes = [
  {path:'',redirectTo:'forget',pathMatch:'full'},
  {path:'updatePassword',component:UpdatepasswordComponent},
  {path:'forgetPassword',component:ForgetpasswordComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }

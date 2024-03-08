import { RegisterComponent } from './../../components/register/register.component';
import { EcomdataService } from './../../shared/services/ecomdata.service';
import { ReactiveFormsModule, FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
})
export class ForgetpasswordComponent {

  constructor(
    private _EcomdataService:EcomdataService,
    private _Router:Router
    ){}

  step1:boolean = true;
  step2:boolean = false;
  step3:boolean = false;
  email:string = '';
  userMsg:string = '';
  

  forgetForm:FormGroup = new FormGroup({
    email:new FormControl('')
  });
  resetCodeForm:FormGroup = new FormGroup({
    resetCode:new FormControl('')
  });
  
  resetPassword:FormGroup = new FormGroup({
    newPassword:new FormControl('')
  });

  forgetPassword():void{
    let userEmail = this.forgetForm.value;
    this.email = userEmail.email;

    this._EcomdataService.forgetPassword(userEmail).subscribe({
      next: (response) =>{
        console.log(response);
        this.userMsg = response.message;
        this.step1 = false;
        this.step2 = true;
      },
      error: (err) => {
        this.userMsg = err.error.message;
      }
    })

  }
  resetCode():void{
    let resetCode = this.resetCodeForm.value;

    this._EcomdataService.resetCode(resetCode).subscribe({
      next: (response) =>{
        console.log(response);
        this.userMsg = response.status;
        this.step2 = false;
        this.step3 = true;
      },
      error: (err) => {
        this.userMsg = err.error.message;
      }
    })
  }
  newpassword():void{
    let resetForm = this.resetPassword.value;
    resetForm.email = this.email

    this._EcomdataService.resetPassword(resetForm).subscribe({
      next: (response) =>{
        console.log(response);
        if(response.token){
          localStorage.setItem('_token',response.token);
          this._Router.navigate(['/home'])
        }
      },
      error: (err) => {
        this.userMsg = err.error.message;
      }
    })
  }


}




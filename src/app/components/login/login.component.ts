import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


//input --- property / form control <input>
//inputs --- object / formGroup <form></form>
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent {


  constructor(private _AuthService:AuthService, private _Router:Router, private _FormBuilder:FormBuilder){}

  // formBuilder
  msgError:string='';
  isLoading:boolean= false;


/*
  loginForm:FormGroup = new FormGroup( {
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
  }); */

  loginForm: FormGroup = this._FormBuilder.group({
    email:[null, [Validators.required , Validators.email] ],
    password:[null,  [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)] ]
  })

  handleForm():void{
    console.log(this.loginForm.value);

    if(this.loginForm.valid){
      this.isLoading =true;

      this._AuthService.setLogin(this.loginForm.value).subscribe({
        next:(response)=>{
          console.log(Response);

          if(response.message == 'success'){
            this.isLoading=false;
            //login

            localStorage.setItem('eToken', response.token);
            console.log(response);

            this._AuthService.decodeUserData();

            this._Router.navigate(['/home']);

          }
        },
        error:(err:HttpErrorResponse)=>{
          this.isLoading=false
          this.msgError = err.error.message;
          console.log(err.error.message);
        }
      })

    }
    else {
      this.loginForm.markAllAsTouched();
    }
  }
  }
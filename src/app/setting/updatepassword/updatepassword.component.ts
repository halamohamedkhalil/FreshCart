import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent {
  constructor(
    private _EcomdataService:EcomdataService,
    private _Router:Router
    ){}
  userMsg:string = '';
  updatePassword:FormGroup = new FormGroup({
    currentPassword:new FormControl(''),
    password:new FormControl(''),
    rePassword:new FormControl(''),

  });
  newpassword():void{
    let updatePasswordForm = this.updatePassword.value;

    this._EcomdataService.updatePassword(updatePasswordForm).subscribe({
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

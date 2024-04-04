import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,Validators,FormBuilder} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Form:any;
  constructor(private fb:FormBuilder){}
  
  ngOnInit(){
    this.Form=this.fb.group({
      Name: ['',[Validators.required,Validators.pattern("^[a-zA-Z]{3,25}$")]],
      Email:['',[Validators.required,Validators.pattern('/^[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$/')]],
      Pass:['',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')]],
      Confirmpass:['',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')]],
      term:['this',[Validators.requiredTrue]],
    })
  }
  submitData(){
    console.log(this.Form.value);
  }
  }



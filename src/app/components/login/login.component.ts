import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  constructor(router:Router) {
   
  }

  ngOnInit(): void {
  }
  isLogin = false;
  onSubmit(form:NgForm){
    if(form.invalid){
      return;
    }
    if(form.value.password === 'Admin@1234#'){
      this.isLogin=true;
    }
  }

}

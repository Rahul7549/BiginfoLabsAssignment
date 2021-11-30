import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  bformdata(form: NgForm)
{
  console.log(form);
  console.log('password =>'+form.value['Password']);
  console.log('Email =>'+form.value['email']);

  console.log(form.value['email']=="user");
  console.log(form.value['Password']=="12345");


  if(form.value['email']=="user" && form.value['Password']=="12345")
  {
    console.log("Login");
    this.router.navigate(['Home']);
  }

}

}

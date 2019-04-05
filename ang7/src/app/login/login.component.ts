import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, Validators, FormControl } from  '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;

  ngOnInit() { }

  loginForm = new FormGroup({
    username : new FormControl('', [
      Validators.required
    ]),
    password : new FormControl('', [
      Validators.required
    ])
  });

  login() {
    if(this.loginForm.value.username == 'admin' && this.loginForm.value.password == 'admin'){
     this.router.navigate(["home"]);
    } else {
      alert("Invalid credentials");
    }
    // console.log(this.loginForm.value);
    // this.isSubmitted = true;
    // if(this.loginForm.invalid){
    //   return;
    // }
    // this.router.navigate(["home"]);
}

}

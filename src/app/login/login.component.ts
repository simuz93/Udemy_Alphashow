import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = ''
  password = ''
  autenticato = false
  errorMsg = ''
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAut() {
    if(this.userid === 'Simone' && this.password === '123') {
      this.route.navigate(['welcome', this.userid])
      this.autenticato = true;
    }
    else {
      this.errorMsg = 'Spiacente, la userid o la password sono errati!'
      this.autenticato = false;
    }

  }

}

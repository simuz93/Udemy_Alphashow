import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from '../services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = ''
  password = ''
  autenticato = true
  errorMsg = ''
  
  constructor(private route: Router, private BasicAuth: AuthappService) { }

  ngOnInit(): void {
  }

  gestAut() {
    if(this.BasicAuth.autentica(this.userid, this.password)) {
      this.route.navigate(['welcome', this.userid])
      this.autenticato = true;
    }
    else {
      this.errorMsg = 'Spiacente, la userid o la password sono errati!'
      this.autenticato = false;
    }
  }
}

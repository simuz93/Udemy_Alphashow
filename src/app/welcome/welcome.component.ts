import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthappService } from '../services/authapp.service';
import { SalutiDataService } from '../services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  messaggio = ''
  saluti: string = 'Benvenuti nel sito Alphashop'
  titolo2 = "Seleziona gli articoli da acquistare"
  utente = ''

  constructor(private route: ActivatedRoute, private salutiSrv : SalutiDataService) { }

  ngOnInit(): void {
    this.utente = this.route.snapshot.params['userid']
    // console.log(this.messaggio);
  }

  getSaluti() {
    this.salutiSrv.getSaluti().subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    )
  }

  handleResponse(response : Object) {
    this.messaggio = response.toString();
  }

  handleError(error : Object) {
    //this.messaggio = error.toString();
  }
}

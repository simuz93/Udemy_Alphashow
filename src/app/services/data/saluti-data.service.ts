import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthappService } from '../authapp.service';

@Injectable({
  providedIn: 'root'
})
export class SalutiDataService {

  constructor(private httpClient : HttpClient, private BasicAuth: AuthappService) { }

  getSaluti() {
    let nome = this.BasicAuth.loggedUser();
    return this.httpClient.get("http://localhost:5051/api/saluti/"+"Marco");
  }
}

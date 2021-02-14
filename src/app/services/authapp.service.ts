import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (UserId: string, Password: string) : boolean => {
    if(UserId === 'Simone' && Password === '123') {
      sessionStorage.setItem("Utente", UserId);
      return true;
    }
    else {
      return false;
    }
  }

  loggedUser = () : string => {
    let utente = sessionStorage.getItem("Utente");
    return utente != null ? utente : "";
  }

  isLogged = () : boolean => sessionStorage.getItem("Utente") != null ? true : false;

  clearAll = () => sessionStorage.removeItem("Utente");
}

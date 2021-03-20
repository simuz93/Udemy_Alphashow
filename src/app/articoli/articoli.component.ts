import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticoliDataService } from '../services/data/articoli-data.service';

export class Articoli {
  
  constructor(
    public codArt: string,
    public descrizione: string,
    public um: string,
    public pzCart: number,
    public pesoNetto: number,
    public prezzo: number,
    public isActive: boolean,
    public dataCreazione: Date,
    public idStatoArt : number
  ) {}

}

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  NumArt = 0;
  pagina = 1;
  righe = 10;
  
  articolo !: Articoli;
  articoli : Articoli[];
  filter : string = '';

  constructor(private articoliService : ArticoliDataService, private route: ActivatedRoute) {
    this.articoli = [];
   }

  ngOnInit(): void {

    this.filter = this.route.snapshot.params['filter'];

    if(this.filter != undefined) {
      this.getArticoli(this.filter);
    }
  }

  refresh() {
    this.getArticoli(this.filter);
  }

  getArticoli(filter : string) {
    this.articoliService.getArticoliByCodArt(this.filter).subscribe(
      response => {
        this.articoli = [];
        this.articolo = response;
        this.articoli.push(this.articolo);
        this.NumArt = this.articoli.length;
      },
      error => {
        console.log(error);
        console.log(error.error.messaggio);

        this.articoliService.getArticoliByEan(this.filter).subscribe(
          response => {
            this.articoli = [];
              this.articolo = response;
              this.articoli.push(this.articolo);
              this.NumArt = this.articoli.length;
          },
          error => {
            console.log(error);
            console.log(error.error.messaggio);

            this.articoliService.getArticoliByDescription(this.filter).subscribe(
            response => {
              this.articoli = response;
              this.NumArt = this.articoli.length;
            },
            error => {
              console.log("Articolo non trovato");
            })
        })
      }
    )
  }
}

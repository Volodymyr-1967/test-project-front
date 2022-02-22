import { Component, OnInit } from '@angular/core';
import { GetFilmsService } from './services/getfilms.service';
import { Films } from './interfaces/films';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetFilmsService]
})
export class AppComponent implements OnInit {
  title = 'Table from CSV file'
  dest = 1;

  elements: Films[] = [
    // {id: '1', name: 'Фильм1', genre1: 'Жанр7', genre2: 'Жанр2', year: '2011'},
    // {id: '2', name: 'Фильм2', genre1: 'Жанр8', genre2: 'Жанр2', year: '2005'},
    // {id: '3', name: 'Фильм3', genre1: 'Жанр3', genre2: 'Жанр8', year: '2009'},
  ];

  constructor(private getFilmsService: GetFilmsService) {}


  ngOnInit(): void {
    this.getFilmsService.get(`http://localhost:3000/films/?dest=${this.dest}&colonsort=name`)
      .subscribe((data) => {
        this.elements = Object.values(data)
  })
  }

  sortName() {
    console.log('sortName_Button')
    this.getFilmsService.get(`http://localhost:3000/films/?dest=${this.dest}&colonsort=name`)
      .subscribe((data) => {
        this.elements = Object.values(data)
      })

  }

  sortGenre1() {
    console.log('sortGenre1_Button')
    this.getFilmsService.get(`http://localhost:3000/films/?dest=${this.dest}&colonsort=genre1`)
      .subscribe((data) => {
        this.elements = Object.values(data)
      })
  }

  sortGenre2() {
    console.log('sortGenre2_Button')
    this.getFilmsService.get(`http://localhost:3000/films/?dest=${this.dest}&colonsort=genre2`)
      .subscribe((data) => {
        this.elements = Object.values(data)
      })
  }

  sortYear() {
    console.log('sortYear_Button')
    this.getFilmsService.get(`http://localhost:3000/films/?dest=${this.dest}&colonsort=year`)
      .subscribe((data) => {
        this.elements = Object.values(data)
      })
  }
}

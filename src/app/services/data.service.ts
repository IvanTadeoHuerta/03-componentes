import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }


  getUsers(){

    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }


  getAlbums(){
    return this.http.get<[]>('https://jsonplaceholder.typicode.com/albums');
  }


  getMenuOpts(){
    return this.http.get<Componente[]>('assets/data/menu.json');
  }


  getHeroes(){
    return this.http.get<[]>('assets/data/superheroes.json')
      .pipe( delay(2000) );
  }


}

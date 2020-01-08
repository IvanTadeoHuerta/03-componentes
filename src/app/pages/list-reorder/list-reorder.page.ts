import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  letras: Array<any> = ['e','a','u','i','o'];

  constructor() { }

  ngOnInit() {
  }

  reorder( event ){
    event.detail.complete();
  }

  showArreglo(){
    console.log( this.letras )
  }

}

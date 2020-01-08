import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll, null) IonInfiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData( event ){
    console.log( 'cargando siguiente' )

    setTimeout(()=>{

      const nuevoArr = Array(20);
      this.data.push( ...nuevoArr);

      event.target.complete();

      if (this.data.length == 100) {
        event.target.disabled = true;
      }

    }, 1000);

  }

}

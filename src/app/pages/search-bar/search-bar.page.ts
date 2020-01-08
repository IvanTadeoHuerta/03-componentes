import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  albumes: any[] = [];
  texto: string = "";

  constructor( private service: DataService) { }

  ngOnInit() {

    this.service.getAlbums().subscribe( albums =>{

      this.albumes = albums

    });

  }

  buscar( event ){
    this.texto = event.detail.value;
  }

}

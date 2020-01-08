import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.componentes = this.dataService.getMenuOpts();

  }

}

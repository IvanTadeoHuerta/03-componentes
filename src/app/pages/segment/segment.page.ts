import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, null) segment: IonSegment;

  superheroes:Observable<[]>;

  constructor(private service: DataService) { }

  ngOnInit() {

    this.superheroes = this.service.getHeroes();
    this.segment.value = 'todos';

  }

  segmentChanged( event ){

    const valorSegmento = event.detail.value;


  }

}

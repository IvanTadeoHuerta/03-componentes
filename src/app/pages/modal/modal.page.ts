import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {



  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async lanzarmodal(){

    const modal = await this.modalCtrl.create({   component: ModalInfoPage,
      componentProps: {
        nombre: 'IVAN',
        pais: 'MEXICO'
      }
    });

    modal.present();

    const { data } = await modal.onDidDismiss();

    console.log('retorno', data);

  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', { static: false }) lista: IonList;

  usuarios: Observable<any>;

  constructor(private service: DataService,
    private toastCtrl: ToastController) { }

  ngOnInit() {

    this.usuarios = this.service.getUsers();

  }

  async presentToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  favorite(item) {
    this.presentToast('guardo en favoritos!!');
    this.lista.closeSlidingItems();
  }

  share(item) {
    this.presentToast('Compartido');
    this.lista.closeSlidingItems();
  }

  borrar(item) {
    this.presentToast('Borrado')
    this.lista.closeSlidingItems();
  }


}

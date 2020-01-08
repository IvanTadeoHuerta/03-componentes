import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-list-loading',
  templateUrl: './list-loading.page.html',
  styleUrls: ['./list-loading.page.scss'],
})
export class ListLoadingPage implements OnInit {

  loading: any;

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {

    this.presentLoading( ' Espere ' );

    setTimeout(()=>{

      this.loading.dismiss();

    }, 1500);

  }

  async presentLoading( message: string ) {
      this.loading = await this.loadingController.create({
      message
      // duration: 2000
    });
    return this.loading.present();

    //const { role, data } = await loading.onDidDismiss();

    
    console.log('Loading dismissed!');
  }

}

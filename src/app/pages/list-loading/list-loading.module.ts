import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListLoadingPageRoutingModule } from './list-loading-routing.module';

import { ListLoadingPage } from './list-loading.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListLoadingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListLoadingPage]
})
export class ListLoadingPageModule {}

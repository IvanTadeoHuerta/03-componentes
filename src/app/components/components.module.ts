import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu/menu.page';
import { RouterModule } from '@angular/router';
import { PopoverInfoComponent } from './popover-info/popover-info.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuPage,
    PopoverInfoComponent
  ],
  exports:[
    HeaderComponent,
    MenuPage,
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }

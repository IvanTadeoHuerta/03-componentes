import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListLoadingPage } from './list-loading.page';

const routes: Routes = [
  {
    path: '',
    component: ListLoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListLoadingPageRoutingModule {}

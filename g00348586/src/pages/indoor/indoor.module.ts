import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndoorPage } from './indoor';

@NgModule({
  declarations: [
    IndoorPage,
  ],
  imports: [
    IonicPageModule.forChild(IndoorPage),
  ],
})
export class IndoorPageModule {}

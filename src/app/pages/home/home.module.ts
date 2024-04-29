import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.page';
import {MenuPageModule} from "../menu/menu.module";
import {SlideTrainingComponent} from "../../components/slide-training/slide-training.component";
import {
  SlidePersonalTrainingComponent
} from "../../components/slide-personal-training/slide-personal-training.component";
import {SlideContentComponent} from "../../components/slide-content/slide-content.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MenuPageModule,
    SlideTrainingComponent
  ],
  exports: [
    HomePage
  ],
  declarations: [HomePage, SlidePersonalTrainingComponent, SlideContentComponent],


})
export class HomePageModule {
}

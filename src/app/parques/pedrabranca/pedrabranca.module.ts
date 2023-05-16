import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedrabrancaPageRoutingModule } from './pedrabranca-routing.module';

import { PedrabrancaPage } from './pedrabranca.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedrabrancaPageRoutingModule
  ],
  declarations: [PedrabrancaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PedrabrancaPageModule {}

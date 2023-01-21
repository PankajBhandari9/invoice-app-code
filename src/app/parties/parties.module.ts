import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartiesRoutingModule } from './parties-routing.module';
import { AddPartyComponent } from './components/add-party/add-party.component';
import { GstAddressComponent } from './components/gst-address/gst-address.component';
import { CreditBalanceComponent } from './components/credit-balance/credit-balance.component';
import { AdditionalFieldsComponent } from './components/additional-fields/additional-fields.component';


@NgModule({
  declarations: [
    AddPartyComponent,
    GstAddressComponent,
    CreditBalanceComponent,
    AdditionalFieldsComponent
  ],
  imports: [
    CommonModule,
    PartiesRoutingModule
  ]
})
export class PartiesModule { }

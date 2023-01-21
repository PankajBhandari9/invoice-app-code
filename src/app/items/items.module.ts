import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { AddItemComponent } from './components/add-item/add-item.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { StockComponent } from './components/stock/stock.component';


@NgModule({
  declarations: [
    AddItemComponent,
    PricingComponent,
    StockComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }

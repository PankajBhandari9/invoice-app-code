import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleInvoicesComponent } from './components/sale-invoices/sale-invoices.component';
import { EstimateQuotationComponent } from './components/estimate-quotation/estimate-quotation.component';
import { PaymentInComponent } from './components/payment-in/payment-in.component';
import { SaleOrderComponent } from './components/sale-order/sale-order.component';
import { DeliveryChallanComponent } from './components/delivery-challan/delivery-challan.component';
import { SaleReturnCrNoteComponent } from './components/sale-return-cr-note/sale-return-cr-note.component';


@NgModule({
  declarations: [
    SaleInvoicesComponent,
    EstimateQuotationComponent,
    PaymentInComponent,
    SaleOrderComponent,
    DeliveryChallanComponent,
    SaleReturnCrNoteComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule
  ]
})
export class SaleModule { }

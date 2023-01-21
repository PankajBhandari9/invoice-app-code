import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpDialogComponent } from './components/pop-up-dialog/pop-up-dialog.component';
import { TosterDialogComponent } from './components/toster-dialog/toster-dialog.component';


@NgModule({
  declarations: [
    PopUpDialogComponent,
    TosterDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }

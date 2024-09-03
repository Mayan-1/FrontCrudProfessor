import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessDialogComponent } from './success-dialog.component';

@NgModule({
  declarations: [SuccessDialogComponent],
  imports: [BrowserModule, MatDialogModule],
  providers: [],
  exports: [SuccessDialogComponent],
})
export class SucessDialogModule {}

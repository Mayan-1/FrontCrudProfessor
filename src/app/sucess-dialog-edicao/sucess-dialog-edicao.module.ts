import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { SucessDialogEdicaoComponent } from './sucess-dialog-edicao.component';

@NgModule({
  declarations: [SucessDialogEdicaoComponent],
  imports: [BrowserModule, MatDialogModule],
  providers: [],
  exports: [SucessDialogEdicaoComponent],
})
export class SucessDialogEdicaoModule {}

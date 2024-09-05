import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DeleteDialogComponent],
  imports: [BrowserModule, MatDialogModule, FormsModule, ReactiveFormsModule],
  providers: [],
  exports: [DeleteDialogComponent],
})
export class DeleteDialogModule {}

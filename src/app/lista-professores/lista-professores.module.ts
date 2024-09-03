import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaProfessoresComponent } from './lista-professores.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ListaProfessoresComponent],
  imports: [BrowserModule, MatTableModule],
  providers: [],
  exports: [ListaProfessoresComponent],
})
export class ListaProfessoresModule {}

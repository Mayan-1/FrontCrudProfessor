import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [BrowserModule, MatIconModule, MatButtonModule, MatToolbarModule],
  providers: [],
  exports: [FooterComponent],
})
export class FooterModule {}

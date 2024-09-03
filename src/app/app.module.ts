import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './navbar/nav-bar.module';
import { FooterModule } from './footer/footer.module';
import { CadastroProfessorModule } from './cadastro-professor/cadastro-professor.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SucessDialogModule } from './success-dialog/sucess-dialog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    FooterModule,
    CadastroProfessorModule,
    NoopAnimationsModule,
    SucessDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './navbar/nav-bar.module';
import { FooterModule } from './footer/footer.module';
import { CadastroProfessorModule } from './cadastro-professor/cadastro-professor.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SucessDialogModule } from './success-dialog/sucess-dialog.module';
import { SucessDialogEdicaoModule } from './sucess-dialog-edicao/sucess-dialog-edicao.module';
import { EdicaoProfessorModule } from './edicao-professor/edicao-professor.module';
import { ListaProfessoresModule } from './lista-professores/lista-professores.module';
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
    SucessDialogEdicaoModule,
    EdicaoProfessorModule,
    ListaProfessoresModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

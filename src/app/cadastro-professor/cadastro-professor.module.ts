import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CadastroProfessorComponent } from './cadastro-professor.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProfessorService } from '../services/professor.service';
import { MatDialogModule } from '@angular/material/dialog';
import { SucessDialogModule } from '../success-dialog/sucess-dialog.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [CadastroProfessorComponent],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    NgxMaskDirective,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    SucessDialogModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSelectModule,
  ],
  providers: [provideNgxMask(), ProfessorService],
  exports: [CadastroProfessorComponent],
})
export class CadastroProfessorModule {}

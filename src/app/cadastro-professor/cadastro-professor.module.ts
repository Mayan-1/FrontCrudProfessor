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
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ReactiveFormsModule,
    MatTooltipModule,
    MatSelectModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [provideNgxMask(), ProfessorService],
  exports: [CadastroProfessorComponent],
})
export class CadastroProfessorModule {}

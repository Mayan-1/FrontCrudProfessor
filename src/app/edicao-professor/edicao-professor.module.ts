import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { EdicaoProfessorComponent } from './edicao-professor.component';
import { DeleteDialogModule } from '../delete-dialog/delete-dialog.module';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [EdicaoProfessorComponent],
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
    DeleteDialogModule,
    MatSelectModule,
    ToastrModule,
    BrowserAnimationsModule,
  ],
  providers: [provideNgxMask(), ProfessorService],
  exports: [EdicaoProfessorComponent],
})
export class EdicaoProfessorModule {}

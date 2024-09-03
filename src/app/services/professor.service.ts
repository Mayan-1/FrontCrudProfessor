import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Injectable, inject } from '@angular/core';
import { ProfessorDto } from '../models/professorDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  constructor() {}

  http = inject(HttpClient);

  url = 'https://localhost:7130/';

  professorNome = '';
  professorCpf = '';
  professorEmail = '';
  confirmacaoEmail = '';
  professorSenha = '';
  confirmacaoSenha = '';
  professorTel = '';
  professorMateria = '';

  criarProfessor(professor: ProfessorDto): Observable<void> {
    return this.http.post<void>(`${this.url}api/Professor`, professor);
  }
}

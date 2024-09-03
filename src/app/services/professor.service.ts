import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Injectable, inject } from '@angular/core';
import { ProfessorCriacaoDto } from '../models/professorCriacaoDto';
import { Observable } from 'rxjs';
import { ProfessorEdicaoDto } from '../models/professorEdicaoDto';
import { Professor } from '../models/professor';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  constructor() {}

  http = inject(HttpClient);

  url = 'https://localhost:7130/';

  obterProfessores() {
    return this.http.get<Professor[]>(`${this.url}api/Professor`);
  }

  criarProfessor(professor: ProfessorCriacaoDto): Observable<void> {
    return this.http.post<void>(`${this.url}api/Professor`, professor);
  }

  editarProfessor(professor: ProfessorEdicaoDto): Observable<void> {
    return this.http.put<void>(
      `${this.url}api/Professor/${professor.id}`,
      professor
    );
  }
}

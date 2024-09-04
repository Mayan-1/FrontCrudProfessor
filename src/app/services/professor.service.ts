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

  obterProfessorPorId(id: number) {
    return this.http.get<Professor>(
      `https://localhost:7130/api/Professor/${id}`
    );
  }

  criarProfessor(professor: ProfessorCriacaoDto): Observable<void> {
    return this.http.post<void>(`${this.url}api/Professor`, professor);
  }

  editarProfessor(id: number, professor: ProfessorEdicaoDto): Observable<void> {
    return this.http.put<void>(`${this.url}api/Professor/${id}`, professor);
  }

  deletarProfessor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}api/Professor/${id}`);
  }
}

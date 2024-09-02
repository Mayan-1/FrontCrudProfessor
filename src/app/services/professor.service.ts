import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfessorDto } from '../models/professorDto';
import { Professor } from '../models/professor';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  constructor(private httpClient: HttpClient) {}

  url = 'https://localhost:7130/';

  professorNome = '';
  professorCpf = '';
  professorEmail = '';
  confirmacaoEmail = '';
  professorSenha = '';
  confirmacaoSenha = '';
  professorTel = '';
  professorMateria = '';

  criarProfessor() {
    const professor: ProfessorDto = {
      nome: this.professorNome,
      cpf: this.professorCpf,
      email: this.professorEmail,
      senha: this.professorSenha,
      telefone: this.professorTel,
      materia: this.professorMateria,
    };

    this.httpClient
      .post<void>(`${this.url}api/Professor`, professor)
      .subscribe((_) => {
        this.professorNome = '';
        this.professorCpf = '';
        this.professorEmail = '';
        this.professorSenha = '';
        this.confirmacaoEmail = '';
        this.confirmacaoSenha = '';
        this.professorTel = '';
        this.professorMateria = '';
      });
  }
}

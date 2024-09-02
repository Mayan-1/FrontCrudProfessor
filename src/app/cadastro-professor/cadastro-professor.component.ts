import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrl: './cadastro-professor.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastroProfessorComponent {
  constructor(private professorService: ProfessorService) {
    console.log(this.professorService);
  }

  professorNome = '';
  professorCpf = '';
  professorEmail = '';
  confirmacaoEmail = '';
  professorSenha = '';
  confirmacaoSenha = '';
  professorTel = '';
  professorMateria = '';

  criarProfessor() {
    if (this.professorEmail !== this.confirmacaoEmail) {
      alert('Os e-mails não coincidem.');
      return;
    }

    if (this.professorSenha !== this.confirmacaoSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    this.professorService.professorNome = this.professorNome;
    this.professorService.professorCpf = this.professorCpf;
    this.professorService.professorEmail = this.professorEmail;
    this.professorService.professorSenha = this.professorSenha;
    this.professorService.professorTel = this.professorTel;
    this.professorService.professorMateria = this.professorMateria;

    this.professorService.criarProfessor();
  }
}

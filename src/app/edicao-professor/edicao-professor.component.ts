import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../services/professor.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SucessDialogEdicaoComponent } from '../sucess-dialog-edicao/sucess-dialog-edicao.component';
import { ActivatedRoute } from '@angular/router';
import { ProfessorEdicaoDto } from '../models/professorEdicaoDto';

@Component({
  selector: 'app-edicao-professor',
  templateUrl: './edicao-professor.component.html',
  styleUrl: './edicao-professor.component.css',
})
export class EdicaoProfessorComponent implements OnInit {
  edicaoProfessorForm!: FormGroup;
  professorData!: ProfessorEdicaoDto;

  constructor(
    private professorService: ProfessorService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const professorIdString = this.route.snapshot.params['id'];
    console.log(professorIdString);
    const professorId = +professorIdString;
    if (professorId) {
      console.log(professorId);
      this.professorService
        .obterProfessorPorId(professorId)
        .subscribe((professor) => {
          console.log('Dados do professor recebidos:', professor);
          this.edicaoProfessorForm.patchValue({
            professorNome: professor.nome,
            professorCpf: professor.cpf,
            professorEmail: professor.email,
            professorTelefone: professor.telefone,
            professorMateria: professor.materia,
          });
        });
    }
    this.edicaoProfessorForm = this.fb.group({
      professorNome: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      professorCpf: ['', Validators.required],
      professorEmail: ['', [Validators.required, Validators.email]],
      professorTelefone: ['', Validators.required],
      professorMateria: ['', Validators.required],
    });
  }

  editarProfessor() {
    if (this.edicaoProfessorForm.invalid) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // const valoresFormulario = this.edicaoProfessorForm.value;
    const professorId = this.route.snapshot.params['id'];
    const professor: ProfessorEdicaoDto = {
      nome: this.edicaoProfessorForm.value.professorNome,
      cpf: this.edicaoProfessorForm.value.professorCpf,
      email: this.edicaoProfessorForm.value.professorEmail,
      materia: this.edicaoProfessorForm.value.professorMateria,
      telefone: this.edicaoProfessorForm.value.professorTelefone,
    };

    console.log(professor);
    // console.log('Valores do formulário:', valoresFormulario);

    // this.professorData = {
    //   nome: valoresFormulario.nome,
    //   cpf: valoresFormulario.cpf,
    //   email: valoresFormulario.email,
    //   materia: valoresFormulario.materia,
    //   telefone: valoresFormulario.telefone,
    // };

    // console.log('Valores do professorData:', this.professorData);

    this.professorService
      .editarProfessor(professorId, professor)
      .subscribe(() => {
        this.abrirDialog();
      });
  }

  deletarProfessor() {
    const professorId = this.route.snapshot.params['id'];

    this.professorService.deletarProfessor(professorId).subscribe(() => {
      this.limparCampos();
      this.abrirDialog();
    });
  }

  limparCampos() {
    this.edicaoProfessorForm.reset();
  }

  abrirDialog() {
    this.dialog.open(SucessDialogEdicaoComponent);
  }
}

import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ProfessorService } from '../services/professor.service';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormControl,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProfessorCriacaoDto } from '../models/professorCriacaoDto';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrl: './cadastro-professor.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CadastroProfessorComponent implements OnInit {
  hideSenha = true;
  hideConfirmacao = true;
  cadastroProfessorForm!: FormGroup;
  constructor(
    private professorService: ProfessorService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  equalsTo(otherField: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.root || !(control.root instanceof FormGroup)) {
        return null;
      }

      const formGroup = <FormGroup>control.root;
      const field = formGroup.get(otherField);

      if (!field) {
        return null;
      }

      return field.value !== control.value ? { equalsTo: otherField } : null;
    };
  }

  ngOnInit() {
    this.cadastroProfessorForm = this.fb.group({
      professorNome: ['', [Validators.required, Validators.minLength(3)]],
      professorCpf: ['', Validators.required],
      professorEmail: ['', [Validators.required, Validators.email]],
      confirmacaoEmail: [
        '',
        [
          Validators.required,
          Validators.email,
          this.equalsTo('professorEmail'),
        ],
      ],
      professorSenha: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
      confirmacaoSenha: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          this.equalsTo('professorSenha'),
          Validators.maxLength(15),
        ],
      ],
      professorTelefone: ['', Validators.required],
      professorMateria: ['', Validators.required],
    });
  }

  criarProfessor() {
    if (this.cadastroProfessorForm.invalid) {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
      return;
    }

    console.log('chegou aqui');

    const professor: ProfessorCriacaoDto = {
      nome: this.cadastroProfessorForm.value.professorNome,
      cpf: this.cadastroProfessorForm.value.professorCpf,
      email: this.cadastroProfessorForm.value.professorEmail,
      senha: this.cadastroProfessorForm.value.professorSenha,
      telefone: this.cadastroProfessorForm.value.professorTelefone,
      materia: this.cadastroProfessorForm.value.professorMateria,
    };

    this.professorService.criarProfessor(professor).subscribe(() => {
      this.limparCampos();
      this.abrirDialog();
    });
  }

  limparCampos() {
    this.cadastroProfessorForm.reset();
  }

  abrirDialog() {
    this.dialog.open(SuccessDialogComponent);
  }
}

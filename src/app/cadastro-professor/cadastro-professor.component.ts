import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ProfessorService } from '../services/professor.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProfessorCriacaoDto } from '../models/professorCriacaoDto';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { Router } from '@angular/router';

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
    private router: Router,
    private professorService: ProfessorService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private toastr: ToastrService
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
      professorCpf: [
        '',
        [
          Validators.required,
          // Validators.pattern('\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}'),
          this.cpfValidator,
        ],
      ],
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
      professorTelefone: [
        '',
        [
          Validators.required,
          // Validators.pattern('[(][0-9]{2}[)][ ][9][0-9]{4}[-][0-9]{4}'),
          this.telefoneValidator,
        ],
      ],
      professorMateria: ['', Validators.required],
    });
  }

  criarProfessor() {
    if (this.cadastroProfessorForm.invalid) {
      this.toastr.error('Por favor, preencha todos os campos', 'Erro', {
        timeOut: 2000,
      });
      return;
    }

    const professor: ProfessorCriacaoDto = {
      nome: this.cadastroProfessorForm.value.professorNome,
      cpf: this.cadastroProfessorForm.value.professorCpf,
      email: this.cadastroProfessorForm.value.professorEmail,
      senha: this.cadastroProfessorForm.value.professorSenha,
      telefone: this.cadastroProfessorForm.value.professorTelefone,
      materia: this.cadastroProfessorForm.value.professorMateria,
    };

    this.professorService.criarProfessor(professor).subscribe(() => {
      this.toastr.success('Professor cadastrado com sucesso', 'Sucesso', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'increasing',
      });
    });

    setTimeout(() => {
      this.router.navigate(['']);
    }, 2000);
  }

  limparCampos() {
    this.cadastroProfessorForm.reset();
  }

  telefoneValidator(control: AbstractControl): ValidationErrors | null {
    const valor = control.value ? control.value.replace(/\D/g, '') : '';
    const telefoneValido = /^\d{11}$/.test(valor);

    return telefoneValido ? null : { pattern: true };
  }

  cpfValidator(control: AbstractControl): ValidationErrors | null {
    const valor = control.value ? control.value.replace(/\D/g, '') : '';
    const cpfValido = valor.length === 11;

    return cpfValido ? null : { pattern: true };
  }
}

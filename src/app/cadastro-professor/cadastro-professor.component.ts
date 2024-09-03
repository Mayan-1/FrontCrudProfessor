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

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrl: './cadastro-professor.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CadastroProfessorComponent implements OnInit {
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
      professorNome: ['', Validators.required],
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
      professorSenha: ['', [Validators.required, Validators.minLength(6)]],
      confirmacaoSenha: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          this.equalsTo('professorSenha'),
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

    const formValues = this.cadastroProfessorForm.value;

    // if (formValues.professorEmail !== formValues.confirmacaoEmail) {
    //   alert('Os e-mails não coincidem.');
    //   return;
    // }

    // if (formValues.professorSenha !== formValues.confirmacaoSenha) {
    //   alert('As senhas não coincidem.');
    //   return;
    // }

    this.professorService.criarProfessor(formValues).subscribe(() => {
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

  // Função que valida se o email e a confirmação são iguais
}

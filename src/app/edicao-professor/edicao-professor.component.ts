import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../services/professor.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SucessDialogEdicaoComponent } from '../sucess-dialog-edicao/sucess-dialog-edicao.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao-professor',
  templateUrl: './edicao-professor.component.html',
  styleUrl: './edicao-professor.component.css',
})
export class EdicaoProfessorComponent implements OnInit {
  edicaoProfessorForm!: FormGroup;

  constructor(
    private professorService: ProfessorService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const professorId = this.route.snapshot.paramMap.get('id');
    this.edicaoProfessorForm = this.fb.group({
      // professorId: ['', Validators.required],
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

    const formValues = this.edicaoProfessorForm.value;

    this.professorService.editarProfessor(formValues).subscribe(() => {
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

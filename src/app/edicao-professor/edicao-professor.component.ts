import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../services/professor.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorEdicaoDto } from '../models/professorEdicaoDto';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { ToastrService } from 'ngx-toastr';

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
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    const professorIdString = this.route.snapshot.params['id'];
    console.log(professorIdString);
    const professorId = +professorIdString;
    if (professorId) {
      this.professorService
        .obterProfessorPorId(professorId)
        .subscribe((professor) => {
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
      professorId,
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
      this.toastr.success('Por favor, preencha todos os campos', 'Erro', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'increasing',
      });
      return;
    }

    // const valoresFormulario = this.edicaoProfessorForm.value;
    const professorId = this.edicaoProfessorForm.value.professorId;
    const professor: ProfessorEdicaoDto = {
      nome: this.edicaoProfessorForm.value.professorNome,
      cpf: this.edicaoProfessorForm.value.professorCpf,
      email: this.edicaoProfessorForm.value.professorEmail,
      materia: this.edicaoProfessorForm.value.professorMateria,
      telefone: this.edicaoProfessorForm.value.professorTelefone,
    };

    this.professorService
      .editarProfessor(professorId, professor)
      .subscribe(() => {
        this.toastr.success('Professor editado com sucesso', 'Sucesso', {
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
    this.edicaoProfessorForm.reset();
  }
}

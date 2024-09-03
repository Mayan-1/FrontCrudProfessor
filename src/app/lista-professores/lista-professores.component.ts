import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../models/professor';
import { ProfessorService } from '../services/professor.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-professores',
  templateUrl: './lista-professores.component.html',
  styleUrl: './lista-professores.component.css',
})
export class ListaProfessoresComponent implements OnInit {
  dataSource = new MatTableDataSource<Professor>();
  displayedColumns: string[] = [
    'id',
    'nome',
    'cpf',
    'email',
    'telefone',
    'materia',
  ];

  constructor(private professorService: ProfessorService) {}

  ngOnInit(): void {
    this.obterProfessores();
  }
  obterProfessores() {
    this.professorService.obterProfessores().subscribe((professores) => {
      this.dataSource.data = professores;
    });
  }
}

import { Component, Inject } from '@angular/core';
import { ProfessorService } from '../services/professor.service';
import { EdicaoProfessorComponent } from '../edicao-professor/edicao-professor.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css',
})
export class DeleteDialogComponent {
  constructor(
    private professorService: ProfessorService,
    public dialogRef: MatDialogRef<DeleteDialogComponent>
  ) {}

  // deletarProfessor() {
  //   console.log('Deletando professor com ID:', this.data.professorId);
  //   this.professorService
  //     .deletarProfessor(this.data.professorId)
  //     .subscribe(() => {
  //       console.log('Professor deletado com sucesso');
  //     });
  // }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}

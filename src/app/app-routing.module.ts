import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './navbar/nav-bar.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { EdicaoProfessorComponent } from './edicao-professor/edicao-professor.component';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';

const routes: Routes = [
  {
    path: 'cadastro',
    component: NavBarComponent,
    children: [{ path: '', component: CadastroProfessorComponent }],
  },
  {
    path: 'edicao',
    component: NavBarComponent,
    children: [{ path: '', component: EdicaoProfessorComponent }],
  },
  {
    path: '',
    component: NavBarComponent,
    children: [{ path: '', component: ListaProfessoresComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

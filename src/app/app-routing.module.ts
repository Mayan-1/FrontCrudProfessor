import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './navbar/nav-bar.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';

const routes: Routes = [
  {
    path: 'cadastro',
    component: NavBarComponent,
    children: [{ path: '', component: CadastroProfessorComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

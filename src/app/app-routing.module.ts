import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './paginas/inicial/inicial.component';

const routes: Routes = [
  { path: '', component: InicialComponent }, // Página inicial
  { path: '**', redirectTo: '' } // Redireciona rotas inválidas para a inicial
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

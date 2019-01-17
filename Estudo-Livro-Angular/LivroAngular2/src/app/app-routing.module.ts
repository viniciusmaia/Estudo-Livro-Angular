import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';

const routes: Routes = [
  { path: '', component: ListaPessoaComponent},
  { path: 'home', component: ListaPessoaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

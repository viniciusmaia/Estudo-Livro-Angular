import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  nomesPessoas: string[] = ['Vinícius', 'Henrique', 'Gerentão'];

  constructor() { }

  getPessoas(): string[]{
    return this.nomesPessoas;
  } 

  adicionaPessoa(nome: string){
    this.nomesPessoas.push();
  }
}

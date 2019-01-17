import { Component, OnInit } from '@angular/core';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

  nome: string = "Vinícius";
  pessoas: string[];

  constructor(private service: PessoaService) {
    this.pessoas = service.getPessoas();
  }

  ngOnInit() {
  }

  listar(){
    
  }

}

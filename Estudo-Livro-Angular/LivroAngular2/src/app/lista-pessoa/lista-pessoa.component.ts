import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

  nome: string = "Vinícius";
  pessoas: string[] = ['Vinícius', 'Henrique', 'Gerentão'];

  constructor() { }

  ngOnInit() {
  }

  listar(){
    
  }

}

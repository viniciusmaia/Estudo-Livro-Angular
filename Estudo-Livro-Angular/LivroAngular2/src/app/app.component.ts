import { Component } from '@angular/core';
import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto de Estudo - Livro Angular 2';

  constructor(private service: AlertaService){

  }

  enviarMensagem(): void{
    this.service.mensagemDeAlerta();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { }

  mensagemDeAlerta(): void{
    alert("Meu projeto!");
  }
}

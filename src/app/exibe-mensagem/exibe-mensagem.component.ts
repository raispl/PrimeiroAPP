import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-exibe-mensagem',
  templateUrl: './exibe-mensagem.component.html',
  styleUrls: ['./exibe-mensagem.component.css']
})
export class ExibeMensagemComponent implements OnInit{
  mensagem: string;
  constructor(){
    this.mensagem = '';
  }
    ngOnInit(){
    }
    alterarMensagem(n: string){
      this.mensagem = `Seja bem-vindo, ${n}!`
      //console.log(`Seja bem-vindo, ${n}!`);
    }
  }


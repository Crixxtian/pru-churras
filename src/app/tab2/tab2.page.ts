import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  numero = 1;
  pontuacao1 = 0;
  pontuacao2 = 0;
  vitoria1 = 0;
  vitoria2 = 0;


  constructor() { }
  mudarNumero1() {
    this.numero = 0
  }
  mudarNumero2() {
    this.numero = 3
  }
  mudarNumero3() {
    this.numero = 6
  }
  mudarNumero4() {
    this.numero = 9
  }
  mudarNumero5() {
    this.numero = 12
  }

  somarPontuacao1() {

    this.pontuacao1 += this.numero
    this.numero = 1
    if (this.pontuacao1 >= 12) {
      this.vitoria1 += 1
      this.pontuacao1 = 0
      this.pontuacao2 = 0
    }

  }
  somarPontuacao2() {
    this.pontuacao2 += this.numero
    this.numero = 1
    if(this.pontuacao2 >=12){
      this.vitoria2 += 1
      this.pontuacao1 = 0
      this.pontuacao2= 0
    }
  }
  subPontuacao1() {

    if (this.pontuacao1 >= 1) {
      this.pontuacao1 -= 1
    }

  }
  subPontuacao2() {
    if (this.pontuacao2 >= 1) {
      this.pontuacao2 -= 1
    }
  }

  limparDados(){
    this.numero =1
    this.pontuacao1= 0
    this.pontuacao2 = 0
    this.vitoria1 = 0
    this.vitoria2= 0
  }


}





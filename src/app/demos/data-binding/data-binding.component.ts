import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})
export class DataBindingComponent {

  public contadorClique: number = 0;   
  public urlImagem: string = "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
  public nome: string = "";

  adicionarClique(){
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  } 
  
 // Esse método só precisa existir se eu quiser fazer o Two-way Binding sem utilizar a diretiva angular. Usado no primeiro exemplo da aula de Two-way Binging
  // keyUp(event: any){                          // any = recebe todos os tipos
  //   this.nome = event.target.value;           // target = objeto ao qual estou me referenciando (input, caixa de texto)
  // }
}

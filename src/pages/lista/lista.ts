import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { DetalhesPage } from '../detalhes/detalhes';

import { ServicoProvider } from '../../providers/servico/servico';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  private herois = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public servico: ServicoProvider) {
    this.listarHerois();
  }

  deslogar() {
    this.navCtrl.setRoot(HomePage);
  }

  listarHerois() {
    this.servico.getHerois().subscribe(
      (data) => {
        this.herois = data;
      }, (error) => console.log(error));
  }

  verDetalhes(heroi) {
    this.navCtrl.push(DetalhesPage, { "heroiSelecionado": heroi });
  }

}

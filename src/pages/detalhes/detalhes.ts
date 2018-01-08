import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  private heroi;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.heroi = navParams.get('heroiSelecionado');
  }

  voltar() {
    // SOLUCAO 1
    let paginaAnterior = this.navParams.get('paginaAnterior');
    paginaAnterior.mensagem = this.heroi.localized_name;
    this.navCtrl.pop();

    // SOLUCAO 2
    // this.navCtrl.pop().then(() => { 
    //   let resolve = this.navParams.get('resolve')(this.heroi.localized_name)
    // });
  }

}

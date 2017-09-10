import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  private heroi;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.heroi = navParams.get("heroiSelecionado");
  }


}

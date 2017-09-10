import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicoProvider {

  private URL = "https://api.opendota.com/api/heroStats";

  constructor(public http: Http) {

  }

  getHerois() {
    return this.http.get(this.URL).map(res => res.json());
  }
  
}

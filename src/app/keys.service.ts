import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from './app.settings';

@Injectable()
export class KeysService {

  constructor(private http: HttpClient) { }

  
  getReedemCodeKeys(reedemCode:string) {
    let strparams = "{code:'" + reedemCode +"'}";
    let url = 'https://api.mlab.com/api/1/databases/randomkeysbox/collections/reedemcodes?q='+strparams;
    url += '&apiKey=j7xm963vICVfSSop9KrwWraF8fMMf9_w';
    return this.http.get(url);
  }
}

import { Component, OnInit } from '@angular/core';
import { KeysService } from '../keys.service';
import { GameKey } from '../models/gamekey';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-reedem',
  templateUrl: './reedem.component.html',
  styleUrls: ['./reedem.component.css']
})
export class ReedemComponent implements OnInit {

  code:string;
  msg:string;
  listKeys:GameKey[];

  constructor(private service:KeysService) { }

  ngOnInit() {
  }

  reedemCode(): void {
    this.listKeys = [];
    this.msg = undefined;
    if (!this.code) {
      return;
    }
    this.service.getReedemCodeKeys(this.code)
    .subscribe((data) =>  {
        if (data && data[0] && data[0].keys) {
          this.listKeys = data[0].keys.map((item)=>{
            return this.parseKey(item);
          });
        }
        else {
          this.msg = "Invalid Code.";
        }
    });
  }

  parseKey(value:string):GameKey {
    let regex = value.search(/[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}/g)
    let desc = value.substr(0,regex).trim();
    let key = value.substr(regex).trim();
    return {name:desc, key:key};
  }

  toCsv() {
    if (this.listKeys && this.listKeys.length > 0) {
      new Angular2Csv(this.listKeys, 'Game Keys #' + this.code);
    }
  }

}


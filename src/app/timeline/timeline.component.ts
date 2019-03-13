import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ExchangeService} from '../core/exchange.service';

import * as ccxt from 'ccxt';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.css']
})
export class TimeLineComponent implements OnInit {

    gdaxData: ccxt.Market[];

    constructor(private router: Router, private exchangeService: ExchangeService) { }

    ngOnInit() {
        if (!window.localStorage.getItem('token')) {
            this.router.navigate(['login']);
            return;
        }

    }

    async fetchDataFrontend() {
        const gdax = new ccxt.gdax();
        gdax.fetchMarkets().then(
            res => { // Success
                this.gdaxData = res;
                console.log(res);
            },
            msg => { // Error
                console.log(msg);
            }
        );
    }

    fetchDataBackend(){
      
            this.exchangeService.getInfo().subscribe(data => {
            
              if (data.status === 200) {
                //window.localStorage.setItem('token', data.result.token);
                alert(data.result);
              } else {               
                alert(data.message);
              }
            });
         
    }


}

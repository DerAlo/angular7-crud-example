import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as ccxt from 'ccxt';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.css']
})
export class TimeLineComponent implements OnInit {

    gdaxData: ccxt.Market[];

    constructor(private router: Router) { }

    ngOnInit() {
        if (!window.localStorage.getItem('token')) {
            this.router.navigate(['login']);
            return;
        }

    }

    async fetchData() {

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


}

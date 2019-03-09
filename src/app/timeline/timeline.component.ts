import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as ccxt from 'ccxt';
import { resolve } from 'url';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.css']
})
export class TimeLineComponent implements OnInit {

    gdaxData: String;
    gdaxData2: String;

    constructor(private router: Router) { }

    ngOnInit() {
        if (!window.localStorage.getItem('token')) {
            this.router.navigate(['login']);
            return;
        }

    }

    async fetchData() {
        this.gdaxData = 'ajjjkgg';
        const gdax = new ccxt.gdax();

        await gdax.loadMarkets().then(function (fulfilled) {
            console.log(fulfilled);
            this.gdaxData2 = fulfilled;
        })
            .catch(function (error) {
                console.log(error.message);
            });

        this.gdaxData = this.gdaxData2;
    }


}

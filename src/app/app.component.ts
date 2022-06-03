import { Component, OnInit } from '@angular/core';

import { CurrencyApiService } from './currency-api.service';
import { CurData } from './currencyData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CurrencyApiService],
})
export class AppComponent implements OnInit {
  title = 'currency-converter';
  nowDate = new Date();
  currencyInfo: CurData[] = [];
  constructor(private httpService: CurrencyApiService) {}

  ngOnInit() {
    this.httpService.getCurrencyData().subscribe((data) => {
      this.currencyInfo = data.filter(
        (cur) => cur.curCountry === 'USD' || cur.curCountry === 'EUR'
      );
    });
  }
}

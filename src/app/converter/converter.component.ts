import { Component, OnInit } from '@angular/core';
import { CurrencyApiService } from '../currency-api.service';
import { CurData } from '../currencyData';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  providers: [CurrencyApiService],
})
export class ConverterComponent implements OnInit {
  valueIn: number = 0;
  rateIn: number = 1;
  valueOut: number = 0;
  rateOut: number = 1;
  currencyInfoIn: CurData[] = [];
  currencyInfoOut: CurData[] = [];

  constructor(private httpService: CurrencyApiService) {}

  ngOnInit() {
    this.httpService.getCurrencyData().subscribe((data) => {
      const indexUSD = data.findIndex((cur) => cur.curCountry === 'USD');
      [data[0], data[indexUSD]] = [data[indexUSD], data[0]];
      this.rateOut = data[0].curRate;
      const currencyUAH = {
        curCountry: 'UAH',
        curRate: 1,
        curName: 'украЇнська гривня',
      };

      this.currencyInfoIn = [currencyUAH, ...data];
      this.currencyInfoOut = [...data, currencyUAH];
    });
  }

  inputHeandlerIn(event: any) {
    this.valueIn = Number(event.target.value);
    this.valueOut = (this.valueIn * this.rateIn) / this.rateOut;
  }

  changeHeandlerIn(event: any) {
    this.rateIn = Number(event.target.value);
    this.valueOut = (this.valueIn * this.rateIn) / this.rateOut;
  }

  inputHeandlerOut(event: any) {
    this.valueOut = Number(event.target.value);
    this.valueIn = (this.valueOut * this.rateOut) / this.rateIn;
  }

  changeHeandlerOut(event: any) {
    this.rateOut = Number(event.target.value);
    this.valueOut = (this.valueIn * this.rateIn) / this.rateOut;
  }
}

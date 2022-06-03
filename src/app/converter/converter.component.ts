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
  currencyInfo: CurData[] = [];

  constructor(private httpService: CurrencyApiService) {}

  ngOnInit() {
    this.httpService.getCurrencyData().subscribe((data) => {
      this.currencyInfo = [{ curCountry: 'UAH', curRate: 1, curName:'украЇнська гривня' }, ...data];
      console.log(this.currencyInfo);
    });
  }

  inputHeandlerIn(event: any) {
    this.valueIn = event.target.value;

    this.valueOut = (this.valueIn * this.rateIn) / this.rateOut;
    console.log(this, this.valueIn);
  }
  changeHeandlerIn(event: any) {
    this.rateIn = event.target.value;
    this.valueOut = (this.valueIn * this.rateIn) / this.rateOut;

    console.log(this, this.rateIn, event.target);
  }
  inputHeandlerOut(event: any) {
    this.valueOut = event.target.value;
    this.valueIn = (this.valueOut * this.rateOut) / this.rateIn;
    console.log(this, this.valueOut);
  }
  changeHeandlerOut(event: any) {
    this.rateOut = event.target.value;
    this.valueOut = (this.valueIn * this.rateIn) / this.rateOut;
    console.log(this, this.rateOut);
  }
}

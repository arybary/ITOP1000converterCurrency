import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurData } from './currencyData';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrencyApiService {
  constructor(private http: HttpClient) {}
  getCurrencyData(): Observable<CurData[]> {
    return this.http
      .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .pipe(
        map((currencyData: any) =>
          currencyData.map((cur: any) => {
            return { curCountry: cur.cc, curRate: cur.rate, curName: cur.txt };
          })
        )
      );
  }
}

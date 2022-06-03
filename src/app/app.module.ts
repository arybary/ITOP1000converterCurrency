import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyApiService } from './currency-api.service';
import { FormsModule } from '@angular/forms';
import { ConverterComponent } from './converter/converter.component';

@NgModule({
  declarations: [AppComponent, ConverterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CurrencyApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

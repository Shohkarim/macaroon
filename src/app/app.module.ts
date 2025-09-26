import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductsComponent } from './components/products/products.component';
import { ButtonEffectsDirective } from './directives/button-effects.directive';
import { CurrencyPipe } from './pipes/currency-pipe.pipe';
import { ReduceTextPipe } from './pipes/reduce-text.pipe';
import { ConvertPhoneNumberPipe } from './pipes/convert-phone-number.pipe';
import {ProductService} from "./services/product.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdvantagesComponent,
    ProductsComponent,
    ButtonEffectsDirective,
    CurrencyPipe,
    ReduceTextPipe,
    ConvertPhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent ]
})
export class AppModule { }

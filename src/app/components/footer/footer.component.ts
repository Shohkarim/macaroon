import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  showPresent:boolean = true;
  link = "https://t.me/";
  phoneNumber:string = "375293689868"
  isVisible = false;
  giftIsVisible: boolean = true;

  constructor(public cartService: CartService) { }


  toggleMessage() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit(): void {
    this.cartService.isVisible$.subscribe(value => this.isVisible = value);
    this.cartService.giftIsVisible$.subscribe(value => this.giftIsVisible = value);
  }
}

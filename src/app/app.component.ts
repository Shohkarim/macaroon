import {Component, OnInit} from '@angular/core';
import {ProductType} from "./Types/product.type";
import {DescriptionType} from "./Types/description.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  public products: ProductType[] = [];
  public descriptions: DescriptionType[] = [];

  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }

  constructor(private productService: ProductService, public cartService: CartService) {
    this.products = this.productService.getProducts();
    this.descriptions = this.productService.getAdvantages();
  }
  ngOnInit() {
  }

  public scrollTo(target: HTMLElement) {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCard(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title;
    this.cartService.count++;
    const sum = product.price * this.cartService.count;
   this.cartService.sum = sum;

    this.cartService.setIsVisible(true);
    this.cartService.setGiftIsVisible(false);
    alert(product.title + ' добавлен в корзину!');
  }

  public createOrder() {
    if (!this.formValues.productTitle) {
      alert("Please fill in the field");
    }
    if (!this.formValues.name) {
      alert("Please fill in the field");
    }
    if (!this.formValues.phone) {
      alert("Please fill in the field");
    }
    alert("thank for order");
//ajax
    this.formValues = {
      productTitle: '',
      name: '',
      phone: ''
    }
  }


}


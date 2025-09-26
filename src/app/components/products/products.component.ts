import {Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {ProductType} from "../../Types/product.type";
import {CartProductService} from "../../services/cart-product.service";



@Component({
  selector: 'product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CartProductService]
})
export class ProductsComponent implements OnInit {
@Input() product: ProductType;

@Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();


  constructor(public cartProductService: CartProductService) {
    this.product = {
      image: '',
      title: '',
      price: 0
    }

  }

  ngOnInit(): void {
  }


  addProductToCart(){
    this.addToCartEvent.emit( this.product);
  }

}

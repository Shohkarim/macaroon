import { Injectable } from '@angular/core';
import {ProductType} from "../Types/product.type";
import {DescriptionType} from "../Types/description.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  getProducts(): ProductType[]{
    return [
      {
        image: 'images/1.png',
        title: 'Макарун с малиной',
        price: 1.70

      },
      {
        image: 'images/2.png',
        title: 'Макарун с манго',
        price: 1.70
      },
      {
        image: 'images/3.png',
        title: 'Пирог с ванилью',
        price: 1.70
      },
      {
        image: 'images/4.png',
        title: 'Пирог с фисташками',
        price: 1.70
      },
    ]
  }

  getAdvantages():DescriptionType[]{
    return [
      {
        id: 1,
        title: "Лучшие продукты",
        text: "Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.",
      },
      {
        id: 2,
        title: "Много вкусов",
        text: "Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок."
      },
      {
        id: 3,
        title: "Бисквитное тесто",
        text: "Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!"
      },
      {
        id: 4,
        title: "Честный продукт",
        text: "Вкус, качество и безопасность наших пирогов подтверждена декларацией соответствии, которую мы получили 22.06.2016 г."
      }
    ]
  }

}

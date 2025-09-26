import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count: number = 0;
  sum: number =0;

  public isVisible$ = new BehaviorSubject<boolean>(false);
  public giftIsVisible$ = new BehaviorSubject<boolean>(true);

  constructor() { }

  setIsVisible(value: boolean): void {
    this.isVisible$.next(value);
  }

  setGiftIsVisible(value: boolean): void {
    this.giftIsVisible$.next(value);
  }
}

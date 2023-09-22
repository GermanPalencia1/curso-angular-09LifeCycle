import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styles: [
  ]
})

export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  ngOnInit(): void {
    console.log('Componente hijo: ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente hijo: ngOnChanges');
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('Componente hijo: ngOnDestroy');
  }

  @Input()
  public price: number = 0;

}

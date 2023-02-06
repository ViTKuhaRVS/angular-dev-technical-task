import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { GoodsDto, ProductDto, ProductInfoDto } from '../../models/product.dto';

@Component({
  selector: 'app-products-presentation',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPresentationComponent implements OnChanges {
  @Input()
  products: ProductDto[] = [];

  @Input()
  productInfo: ProductInfoDto = {};

  @Input()
  goods: GoodsDto[] = [];

  @Output()
  emitGetProductInfo: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  emitChanges: EventEmitter<number> = new EventEmitter<number>();

  filteredProducts: ProductDto[] = [];

  isShoppingCart: boolean = !!this.goods.length;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products'] && this.products) {
      this.filteredProducts = this.products;
    }
    if (changes['goods'] && this.goods) {
      const goodsProductsId = this.goods.map(goodsItem => goodsItem.productId);
      this.filteredProducts = goodsProductsId.length
        ? this.products.filter(product => goodsProductsId.includes(product.id))
        : this.products;
    }
    this.isShoppingCart = !!this.goods.length;
  }

  callAction(productId: number): void {
    this.emitChanges.emit(productId);
  }
}

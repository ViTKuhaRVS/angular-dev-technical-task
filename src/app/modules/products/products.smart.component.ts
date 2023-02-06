import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GoodsDto, ProductDto, ProductInfoDto } from '../../models/product.dto';
import { AppState } from '../../models/store.model';
import { Store } from '@ngrx/store';
import { selectGoods, selectProductInfo, selectProductList } from '../state-management/products.reducer';
import { addToShoppingCart, getProductInfo } from '../state-management/products.actions';

@Component({
  selector: 'app-products-smart',
  template: `<app-products-presentation
    [products]="(products$ | async)!"
    [productInfo]="(productInfo$ | async)!"
    [goods]="(goods$ | async)!"
    (emitGetProductInfo)="getProductInfo($event)"
    (emitChanges)="dispatchAction($event)"
  ></app-products-presentation>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSmartComponent {
  products$: Observable<ProductDto[]> = this.store.select(selectProductList);

  goods$: Observable<GoodsDto[]> = this.store.select(selectGoods);

  productInfo$: Observable<ProductInfoDto> = this.store.select(selectProductInfo);

  constructor(private store: Store<AppState>) {
  }

  getProductInfo(productId: number): void {
    this.store.dispatch(getProductInfo({payload: productId}));
  }

  dispatchAction(productId: number): void {
    this.store.dispatch(addToShoppingCart({payload: productId}));
  }
}

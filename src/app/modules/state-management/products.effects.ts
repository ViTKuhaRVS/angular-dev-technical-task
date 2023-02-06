import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Router } from '@angular/router';
import {
  addToShoppingCart,
  clearGoodsList,
  getGoodsList,
  getProductInfo,
  getProductList,
  setGoodsList,
  setProductInfo,
  setProductList
} from './products.actions';
import { ProductsHttpService } from '../services/products-http.service';
import { GoodsDto, ProductDto, ProductInfoDto } from '../../models/product.dto';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/store.model';
import { selectUserId } from '../../auth/state-management/auth.reducer';

@Injectable()
export class ProductsEffects {
  getProductList$ = createEffect(() => this.actions$.pipe(
    ofType(getProductList.type),
    switchMap(() => this.productsHttpService.getProductList().pipe(
      map((products: ProductDto[]) => {
        return setProductList({products});
      }),
      catchError(({error}) => {
        alert(error);
        return of();
      })
    ))
  ));

  getProductInfo$ = createEffect(() => this.actions$.pipe(
    ofType(getProductInfo.type),
    map((action: {type: string, payload: number }) => action.payload),
    switchMap((productId) => this.productsHttpService.getProductInfo(productId).pipe(
      map((productInfo: ProductInfoDto[]) => {
        return setProductInfo(productInfo[0]);
      }),
      catchError(({error}) => {
        alert(error);
        return [];
      })
    ))
  ));

  getGoodsList$ = createEffect(() => this.actions$.pipe(
    ofType(getGoodsList.type),
    withLatestFrom(this.store.select(selectUserId)),
    switchMap(([, userId]) => {
      if (userId) {
        return this.productsHttpService.getGoodsList(userId).pipe(
          map((goodsList: GoodsDto[]) => setGoodsList({goodsList}))
        );
      } else {
        this.router.navigateByUrl('/login');
        return [];
      }
    })
  ));

  addToShoppingCart$ = createEffect(() => this.actions$.pipe(
    ofType(addToShoppingCart.type),
    map((action: {type: string, payload: number }) => action.payload),
    withLatestFrom(this.store.select(selectUserId)),
    switchMap(([productId, userId]) => {
      if (userId) {
        return this.productsHttpService.addProductToShoppingCart({
          id: Math.random(),
          productId: productId,
          userId: userId,
        }).pipe(map(() => clearGoodsList()));
      } else {
        this.router.navigateByUrl('/login');
        return [];
      }
    })
  ));

  constructor(private actions$: Actions,
              private productsHttpService: ProductsHttpService,
              private store: Store<AppState>,
              private router: Router) {
  }
}

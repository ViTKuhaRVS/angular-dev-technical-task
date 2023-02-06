import { createReducer, createSelector, on } from '@ngrx/store';
import { ProductsState, selectProductsState } from '../../models/store.model';
import { clearGoodsList, setGoodsList, setProductInfo, setProductList } from './products.actions';

const initialState: ProductsState = {
  products: [],
  productInfo: {},
  selectedProduct: {},
  goods: [],
}

export const selectProductList = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);

export const selectProductInfo = createSelector(
  selectProductsState,
  (state: ProductsState) => state.productInfo
);

export const selectGoods = createSelector(
  selectProductsState,
  (state: ProductsState) => state.goods
)

export const productsReducer = createReducer(
  initialState,
  on(setProductList, (state, productList) => ({
    ...state,
    products: productList.products,
  })),
  on(setGoodsList, (state, goodsList) => ({
    ...state,
    goods: goodsList.goodsList,
  })),
  on(setProductInfo, (state, productInfo) => ({
    ...state,
    productInfo: productInfo,
  })),
  on(clearGoodsList, (state) => ({
    ...state,
    goods: [],
  })),
);

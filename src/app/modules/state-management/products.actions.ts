import { createAction, props } from '@ngrx/store';
import { GoodsDto, ProductDto, ProductInfoDto } from '../../models/product.dto';

export const getProductList = createAction('[Products] Get product list');

export const setProductList = createAction('[Products] Set product list', props<{products: ProductDto[]}>());

export const setGoodsList = createAction('[Products] Set goods list', props<{goodsList: GoodsDto[]}>());

export const setProductInfo = createAction('[Products] Set product info', props<ProductInfoDto>());

export const getProductInfo = createAction('[Products] Get product info', props<{payload: number}>());

export const getGoodsList = createAction('[Products] Get goods list');

export const clearGoodsList = createAction('[Products] Clear goods list');

export const addToShoppingCart = createAction('[Products] Add to shopping cart', props<{payload: number}>());

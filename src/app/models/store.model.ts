import { GoodsDto, ProductDto, ProductInfoDto } from './product.dto';

export interface AuthState {
  userId: number;
  userEmail: string;
  userName: string;
}

export interface ProductsState {
  productInfo: ProductInfoDto;
  selectedProduct: ProductDto;
  products: ProductDto[];
  goods: GoodsDto[];
}

export interface AppState {
  auth: AuthState;
  products: ProductsState;
}

export const selectAuthState = (state: AppState) => state.auth;
export const selectProductsState = (state: AppState) => state.products;

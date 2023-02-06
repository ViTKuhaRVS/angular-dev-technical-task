export interface ProductDto {
  id?: number;
  title?: string;
  image?: string;
  type?: string;
  price?: number;
}

export interface ProductInfoDto {
  id?: number;
  title?: string;
  info?: string;
  image?: string;
}

export interface GoodsDto {
  id: number;
  productId?: number;
  userId?: number;
}

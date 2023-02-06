import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoodsDto, ProductDto, ProductInfoDto } from '../../models/product.dto';

@Injectable({providedIn: 'root'})
export class ProductsHttpService {
  constructor(private httpClient: HttpClient) {
  }

  getProductList(): Observable<ProductDto[]> {
    return this.httpClient.get<ProductDto[]>('http://localhost:3000/product/list');
  }

  getProductInfo(id: number): Observable<ProductInfoDto[]> {
    return this.httpClient.get<ProductInfoDto[]>(`http://localhost:3000/product/info?id=${id}`);
  }

  getGoodsList(userId: number): Observable<GoodsDto[]> {
    return this.httpClient.get<GoodsDto[]>(`http://localhost:3000/goods/list?userId=${userId}`);
  }

  addProductToShoppingCart(newGoodsItem: GoodsDto): Observable<any> {
    return this.httpClient.post<any>(`http://localhost:3000/goods/add`, newGoodsItem);
  }
}

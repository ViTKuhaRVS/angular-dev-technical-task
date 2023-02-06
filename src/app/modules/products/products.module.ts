import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCommonModule } from '../../common/ui-common.module';
import { ProductsSmartComponent } from './products.smart.component';
import { ProductsPresentationComponent } from './products.presentation.component';
import { ProductsRoutingModule } from './products-routing.module';
import { clearGoodsList, getGoodsList, getProductList } from '../state-management/products.actions';
import { AppState } from '../../models/store.model';
import { Store } from '@ngrx/store';
import { ProductsHttpService } from '../services/products-http.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';



@NgModule({
  declarations: [
    ProductsSmartComponent,
    ProductsPresentationComponent,
  ],
  imports: [
    CommonModule,
    UiCommonModule,
    ProductsRoutingModule,
  ],
  providers: [ProductsHttpService],
  entryComponents: [ProductsSmartComponent]
})
export class ProductsModule {
  constructor(private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute) {
    store.dispatch(getProductList());
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      store.dispatch(this.router.url.endsWith('/shoppingCart') ? getGoodsList() : clearGoodsList());
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductsOverviewComponent } from './components/products-overview/products-overview.component';
import { FilterComponent } from './components/filter/filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

const MAT_MODULES = [
  MatSidenavModule,
  MatButtonModule,
  HttpClientModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatGridListModule,
  MatCheckboxModule,
]

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsOverviewComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    ...MAT_MODULES,
    MatSliderModule,
    FormsModule,
  ],
  exports: [
    ...MAT_MODULES,
    ProductCardComponent,
    ProductsOverviewComponent,
    FilterComponent,
  ],
})
export class UiCommonModule { }

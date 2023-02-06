import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges, ViewChild
} from '@angular/core';
import { GoodsDto, ProductDto, ProductInfoDto } from '../../../models/product.dto';
import { MatDrawer } from '@angular/material/sidenav';
import { FilterModel } from '../../models/filter.model';

@Component({
  selector: 'app-products-overview',
  templateUrl: './products-overview.component.html',
  styleUrls: ['./products-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsOverviewComponent implements OnChanges {
  @Input()
  items: ProductDto[] = [];

  @Input()
  itemInfo: ProductInfoDto = {};

  @Input()
  isShoppingCart: boolean = false;

  @Output()
  emitGetInfo: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  emitAction: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('drawer', {read: MatDrawer, static: true}) drawer!: MatDrawer;

  filteredItems: ProductDto[] = [];

  types: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items'] && this.items) {
      this.types = this.items.map(item => item.type!);
      this.filteredItems = this.items;
    }
    if (changes['itemInfo'] && this.itemInfo.id) {
      this.drawer.open().then();
    }
  }

  filterItems(filter: FilterModel): void {
    this.filteredItems = [...this.items];
    if (filter.selectedTypes.length) {
      this.filteredItems = this.filteredItems.filter(item => filter.selectedTypes.includes(item.type!));
    }
    if (filter.minPriceRange) {
      this.filteredItems = this.filteredItems.filter(item => item.price! >= filter.minPriceRange);
    }
    if (filter.maxPriceRange) {
      this.filteredItems = this.filteredItems.filter(item => item.price! <= filter.maxPriceRange);
    }
  }
}

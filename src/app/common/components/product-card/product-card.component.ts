import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDto } from '../../../models/product.dto';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input()
  product!: ProductDto;

  @Input()
  isShoppingCart: boolean = false;

  @Output()
  emitAction: EventEmitter<number> = new EventEmitter<number>();
}

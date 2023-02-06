import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FilterModel } from '../../models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnChanges {
  @Input()
  types: string[] = [];

  @Output()
  confirmFilter: EventEmitter<FilterModel> = new EventEmitter<FilterModel>();

  checkboxConfigs: {title: string, selected: boolean}[] = [];

  selectedTypes: string[] = [];

  minPriceRange: number = 0;

  maxPriceRange: number = 15000;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['types'] && this.types) {
      this.createCheckboxConfigs();
    }
  }

  onCheck(event: MatCheckboxChange, type: string): void {
    if (event.checked) {
      this.selectedTypes.push(type);
    } else {
      this.selectedTypes = this.selectedTypes.filter(selectedType => type !== selectedType);
    }
  }

  private createCheckboxConfigs(): void {
    this.checkboxConfigs = this.types.map((type) => ({title: type, selected: false}));
  }
}

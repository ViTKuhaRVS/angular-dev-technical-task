import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOverviewPresentationComponent } from './products-overview.component';

describe('ProductsOverviewComponent', () => {
  let component: ProductsOverviewPresentationComponent;
  let fixture: ComponentFixture<ProductsOverviewPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsOverviewPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsOverviewPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponet } from './product-componet';

describe('ProductComponet', () => {
  let component: ProductComponet;
  let fixture: ComponentFixture<ProductComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

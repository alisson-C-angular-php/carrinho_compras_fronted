import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateComponet } from './product-create-componet';

describe('ProductCreateComponet', () => {
  let component: ProductCreateComponet;
  let fixture: ComponentFixture<ProductCreateComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCreateComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCreateComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

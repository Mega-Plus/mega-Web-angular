import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDocsComponent } from './product-docs.component';

describe('ProductDocsComponent', () => {
  let component: ProductDocsComponent;
  let fixture: ComponentFixture<ProductDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

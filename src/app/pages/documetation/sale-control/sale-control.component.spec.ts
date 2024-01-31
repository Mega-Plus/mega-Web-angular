import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleControlComponent } from './sale-control.component';

describe('SaleControlComponent', () => {
  let component: SaleControlComponent;
  let fixture: ComponentFixture<SaleControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

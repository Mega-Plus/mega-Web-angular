import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProductSectionComponent } from './about-product-section.component';

describe('AboutProductSectionComponent', () => {
  let component: AboutProductSectionComponent;
  let fixture: ComponentFixture<AboutProductSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutProductSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

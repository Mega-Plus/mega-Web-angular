import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumetationComponent } from './documetation.component';

describe('DocumetationComponent', () => {
  let component: DocumetationComponent;
  let fixture: ComponentFixture<DocumetationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumetationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumetationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

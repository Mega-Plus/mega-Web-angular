import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillterDocsComponent } from './fillter-docs.component';

describe('FillterDocsComponent', () => {
  let component: FillterDocsComponent;
  let fixture: ComponentFixture<FillterDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillterDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillterDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

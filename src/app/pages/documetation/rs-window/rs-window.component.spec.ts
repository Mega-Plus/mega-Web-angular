import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsWindowComponent } from './rs-window.component';

describe('RsWindowComponent', () => {
  let component: RsWindowComponent;
  let fixture: ComponentFixture<RsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

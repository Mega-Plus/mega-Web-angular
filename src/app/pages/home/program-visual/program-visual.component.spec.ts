import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramVisualComponent } from './program-visual.component';

describe('ProgramVisualComponent', () => {
  let component: ProgramVisualComponent;
  let fixture: ComponentFixture<ProgramVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramVisualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

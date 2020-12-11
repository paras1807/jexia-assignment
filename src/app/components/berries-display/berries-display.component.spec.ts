import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerriesDisplayComponent } from './berries-display.component';

describe('BerriesDisplayComponent', () => {
  let component: BerriesDisplayComponent;
  let fixture: ComponentFixture<BerriesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerriesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerriesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

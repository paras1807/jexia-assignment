import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerriesFirmnessComponent } from './berries-firmness.component';

describe('BerriesFirmnessComponent', () => {
  let component: BerriesFirmnessComponent;
  let fixture: ComponentFixture<BerriesFirmnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerriesFirmnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerriesFirmnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

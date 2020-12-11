import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerriesInfoComponent } from './berries-info.component';

describe('BerriesInfoComponent', () => {
  let component: BerriesInfoComponent;
  let fixture: ComponentFixture<BerriesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerriesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerriesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

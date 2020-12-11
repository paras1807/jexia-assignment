import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerriesCatalogComponent } from './berries-catalog.component';

describe('BerriesCatalogComponent', () => {
  let component: BerriesCatalogComponent;
  let fixture: ComponentFixture<BerriesCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerriesCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerriesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxyBeersComponent } from './foxy-beers.component';

describe('FoxyBeersComponent', () => {
  let component: FoxyBeersComponent;
  let fixture: ComponentFixture<FoxyBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoxyBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxyBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

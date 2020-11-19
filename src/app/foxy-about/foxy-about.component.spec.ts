import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxyAboutComponent } from './foxy-about.component';

describe('FoxyAboutComponent', () => {
  let component: FoxyAboutComponent;
  let fixture: ComponentFixture<FoxyAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoxyAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

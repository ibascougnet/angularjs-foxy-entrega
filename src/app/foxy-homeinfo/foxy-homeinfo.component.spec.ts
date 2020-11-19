import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxyHomeinfoComponent } from './foxy-homeinfo.component';

describe('FoxyHomeinfoComponent', () => {
  let component: FoxyHomeinfoComponent;
  let fixture: ComponentFixture<FoxyHomeinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoxyHomeinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxyHomeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

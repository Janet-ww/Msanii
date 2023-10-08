import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerenovationComponent } from './homerenovation.component';

describe('HomerenovationComponent', () => {
  let component: HomerenovationComponent;
  let fixture: ComponentFixture<HomerenovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomerenovationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomerenovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

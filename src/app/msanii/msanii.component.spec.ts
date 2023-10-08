import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsaniiComponent } from './msanii.component';

describe('MsaniiComponent', () => {
  let component: MsaniiComponent;
  let fixture: ComponentFixture<MsaniiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsaniiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsaniiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

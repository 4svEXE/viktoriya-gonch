import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapsComponent } from './etaps.component';

describe('EtapsComponent', () => {
  let component: EtapsComponent;
  let fixture: ComponentFixture<EtapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtapsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

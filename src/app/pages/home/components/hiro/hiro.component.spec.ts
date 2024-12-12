import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiroComponent } from './hiro.component';

describe('HiroComponent', () => {
  let component: HiroComponent;
  let fixture: ComponentFixture<HiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

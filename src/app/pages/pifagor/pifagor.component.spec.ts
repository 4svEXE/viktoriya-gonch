import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PifagorComponent } from './pifagor.component';

describe('PifagorComponent', () => {
  let component: PifagorComponent;
  let fixture: ComponentFixture<PifagorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PifagorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PifagorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

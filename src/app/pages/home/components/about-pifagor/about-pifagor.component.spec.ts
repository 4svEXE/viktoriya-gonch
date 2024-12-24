import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPifagorComponent } from './about-pifagor.component';

describe('AboutPifagorComponent', () => {
  let component: AboutPifagorComponent;
  let fixture: ComponentFixture<AboutPifagorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutPifagorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPifagorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

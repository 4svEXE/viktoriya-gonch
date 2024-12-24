import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSumistnistComponent } from './about-sumistnist.component';

describe('AboutSumistnistComponent', () => {
  let component: AboutSumistnistComponent;
  let fixture: ComponentFixture<AboutSumistnistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutSumistnistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSumistnistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

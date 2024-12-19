import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumistnistComponent } from './sumistnist.component';

describe('SumistnistComponent', () => {
  let component: SumistnistComponent;
  let fixture: ComponentFixture<SumistnistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SumistnistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumistnistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

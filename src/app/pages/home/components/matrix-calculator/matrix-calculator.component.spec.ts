import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixCalculatorComponent } from './matrix-calculator.component';

describe('MatrixCalculatorComponent', () => {
  let component: MatrixCalculatorComponent;
  let fixture: ComponentFixture<MatrixCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatrixCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

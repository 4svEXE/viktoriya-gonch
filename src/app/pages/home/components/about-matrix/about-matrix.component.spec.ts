import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMatrixComponent } from './about-matrix.component';

describe('AboutMatrixComponent', () => {
  let component: AboutMatrixComponent;
  let fixture: ComponentFixture<AboutMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutMatrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

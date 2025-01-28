import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsMatrixComponent } from './kids-matrix.component';

describe('KidsMatrixComponent', () => {
  let component: KidsMatrixComponent;
  let fixture: ComponentFixture<KidsMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KidsMatrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

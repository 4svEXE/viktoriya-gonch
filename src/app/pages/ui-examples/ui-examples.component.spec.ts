import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiExamplesComponent } from './ui-examples.component';

describe('UiExamplesComponent', () => {
  let component: UiExamplesComponent;
  let fixture: ComponentFixture<UiExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

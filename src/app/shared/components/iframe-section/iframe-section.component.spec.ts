import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeSectionComponent } from './iframe-section.component';

describe('IframeSectionComponent', () => {
  let component: IframeSectionComponent;
  let fixture: ComponentFixture<IframeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

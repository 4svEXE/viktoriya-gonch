import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAllServicesComponent } from './my-all-services.component';

describe('MyAllServicesComponent', () => {
  let component: MyAllServicesComponent;
  let fixture: ComponentFixture<MyAllServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAllServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAllServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NineWorldsComponent } from './nine-worlds.component';

describe('NineWorldsComponent', () => {
  let component: NineWorldsComponent;
  let fixture: ComponentFixture<NineWorldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NineWorldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NineWorldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

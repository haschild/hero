import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDirectiveComponent } from './hero-directive.component';

describe('HeroDirectiveComponent', () => {
  let component: HeroDirectiveComponent;
  let fixture: ComponentFixture<HeroDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

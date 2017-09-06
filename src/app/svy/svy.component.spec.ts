import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvyComponent } from './svy.component';

describe('SvyComponent', () => {
  let component: SvyComponent;
  let fixture: ComponentFixture<SvyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcontactformComponent } from './addcontactform.component';

describe('AddcontactformComponent', () => {
  let component: AddcontactformComponent;
  let fixture: ComponentFixture<AddcontactformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcontactformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcontactformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

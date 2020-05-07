import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GFormsComponent } from './g-forms.component';

describe('GFormsComponent', () => {
  let component: GFormsComponent;
  let fixture: ComponentFixture<GFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineitemEditComponent } from './lineitem-edit.component';

describe('LineitemEditComponent', () => {
  let component: LineitemEditComponent;
  let fixture: ComponentFixture<LineitemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineitemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineitemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

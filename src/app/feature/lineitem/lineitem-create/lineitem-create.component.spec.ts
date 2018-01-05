import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineitemCreateComponent } from './lineitem-create.component';

describe('LineitemCreateComponent', () => {
  let component: LineitemCreateComponent;
  let fixture: ComponentFixture<LineitemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineitemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineitemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

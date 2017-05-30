import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsontestComponent } from './jsontest.component';

describe('JsontestComponent', () => {
  let component: JsontestComponent;
  let fixture: ComponentFixture<JsontestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsontestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

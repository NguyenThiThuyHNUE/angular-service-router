import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCompomentComponent } from './demo-compoment.component';

describe('DemoCompomentComponent', () => {
  let component: DemoCompomentComponent;
  let fixture: ComponentFixture<DemoCompomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCompomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

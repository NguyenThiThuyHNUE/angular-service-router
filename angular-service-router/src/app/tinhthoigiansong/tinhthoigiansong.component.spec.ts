import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhthoigiansongComponent } from './tinhthoigiansong.component';

describe('TinhthoigiansongComponent', () => {
  let component: TinhthoigiansongComponent;
  let fixture: ComponentFixture<TinhthoigiansongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinhthoigiansongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhthoigiansongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

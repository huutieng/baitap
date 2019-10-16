import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguyenhuutiengComponent } from './nguyenhuutieng.component';

describe('NguyenhuutiengComponent', () => {
  let component: NguyenhuutiengComponent;
  let fixture: ComponentFixture<NguyenhuutiengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguyenhuutiengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguyenhuutiengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

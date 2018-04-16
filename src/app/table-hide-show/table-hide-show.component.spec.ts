import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHideShowComponent } from './table-hide-show.component';

describe('TableHideShowComponent', () => {
  let component: TableHideShowComponent;
  let fixture: ComponentFixture<TableHideShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHideShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

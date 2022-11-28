import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksheetlistComponent } from './marksheetlist.component';

describe('MarksheetlistComponent', () => {
  let component: MarksheetlistComponent;
  let fixture: ComponentFixture<MarksheetlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksheetlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksheetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

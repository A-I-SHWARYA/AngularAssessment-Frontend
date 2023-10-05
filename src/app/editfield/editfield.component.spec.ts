import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfieldComponent } from './editfield.component';

describe('EditfieldComponent', () => {
  let component: EditfieldComponent;
  let fixture: ComponentFixture<EditfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditfieldComponent]
    });
    fixture = TestBed.createComponent(EditfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

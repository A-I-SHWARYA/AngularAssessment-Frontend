import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfieldComponent } from './addfield.component';

describe('AddfieldComponent', () => {
  let component: AddfieldComponent;
  let fixture: ComponentFixture<AddfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfieldComponent]
    });
    fixture = TestBed.createComponent(AddfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

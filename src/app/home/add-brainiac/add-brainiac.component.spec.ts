import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrainiacComponent } from './add-brainiac.component';

describe('AddBrainiacComponent', () => {
  let component: AddBrainiacComponent;
  let fixture: ComponentFixture<AddBrainiacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBrainiacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBrainiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

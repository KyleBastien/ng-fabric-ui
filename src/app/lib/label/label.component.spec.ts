import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricLabelComponent } from './label.component';

describe('FabricLabelComponent', () => {
  let component: FabricLabelComponent;
  let fixture: ComponentFixture<FabricLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

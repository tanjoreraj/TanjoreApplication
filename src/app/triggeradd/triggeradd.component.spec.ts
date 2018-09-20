import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggeraddComponent } from './triggeradd.component';

describe('TriggeraddComponent', () => {
  let component: TriggeraddComponent;
  let fixture: ComponentFixture<TriggeraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggeraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggeraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

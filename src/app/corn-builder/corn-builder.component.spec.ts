import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornBuilderComponent } from './corn-builder.component';

describe('CornBuilderComponent', () => {
  let component: CornBuilderComponent;
  let fixture: ComponentFixture<CornBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

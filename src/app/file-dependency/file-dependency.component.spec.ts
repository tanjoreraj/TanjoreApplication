import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDependencyComponent } from './file-dependency.component';

describe('FileDependencyComponent', () => {
  let component: FileDependencyComponent;
  let fixture: ComponentFixture<FileDependencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileDependencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

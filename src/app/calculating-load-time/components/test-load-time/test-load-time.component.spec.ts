import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLoadTimeComponent } from './test-load-time.component';

describe('TestLoadTimeComponent', () => {
  let component: TestLoadTimeComponent;
  let fixture: ComponentFixture<TestLoadTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLoadTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLoadTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

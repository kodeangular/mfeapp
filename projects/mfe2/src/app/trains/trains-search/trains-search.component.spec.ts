import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsSearchComponent } from './trains-search.component';

describe('TrainsSearchComponent', () => {
  let component: TrainsSearchComponent;
  let fixture: ComponentFixture<TrainsSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainsSearchComponent]
    });
    fixture = TestBed.createComponent(TrainsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

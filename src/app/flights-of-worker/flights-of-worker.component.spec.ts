import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsOfWorkerComponent } from './flights-of-worker.component';

describe('FlightsOfWorkerComponent', () => {
  let component: FlightsOfWorkerComponent;
  let fixture: ComponentFixture<FlightsOfWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsOfWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsOfWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

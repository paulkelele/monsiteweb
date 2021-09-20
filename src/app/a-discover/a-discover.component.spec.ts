import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADiscoverComponent } from './a-discover.component';

describe('ADiscoverComponent', () => {
  let component: ADiscoverComponent;
  let fixture: ComponentFixture<ADiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADiscoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

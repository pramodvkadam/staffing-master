import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestApplicationsComponent } from './latest-applications.component';

describe('LatestApplicationsComponent', () => {
  let component: LatestApplicationsComponent;
  let fixture: ComponentFixture<LatestApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestEngagementsComponent } from './latest-engagements.component';

describe('LatestEngagementsComponent', () => {
  let component: LatestEngagementsComponent;
  let fixture: ComponentFixture<LatestEngagementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestEngagementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestEngagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

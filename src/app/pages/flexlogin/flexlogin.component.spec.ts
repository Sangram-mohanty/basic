import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexloginComponent } from './flexlogin.component';

describe('FlexloginComponent', () => {
  let component: FlexloginComponent;
  let fixture: ComponentFixture<FlexloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

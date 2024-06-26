import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNavComponent } from './phone-nav.component';

describe('PhoneNavComponent', () => {
  let component: PhoneNavComponent;
  let fixture: ComponentFixture<PhoneNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyplibComponent } from './typlib.component';

describe('TyplibComponent', () => {
  let component: TyplibComponent;
  let fixture: ComponentFixture<TyplibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TyplibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TyplibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

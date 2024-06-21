import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormkittenComponent } from './formkitten.component';

describe('FormkittenComponent', () => {
  let component: FormkittenComponent;
  let fixture: ComponentFixture<FormkittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormkittenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormkittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

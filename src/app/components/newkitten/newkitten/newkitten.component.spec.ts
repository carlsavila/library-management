import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewkittenComponent } from './newkitten.component';

describe('NewkittenComponent', () => {
  let component: NewkittenComponent;
  let fixture: ComponentFixture<NewkittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewkittenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewkittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

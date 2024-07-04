import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserkittensComponent } from './userkittens.component';

describe('UserkittensComponent', () => {
  let component: UserkittensComponent;
  let fixture: ComponentFixture<UserkittensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserkittensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserkittensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

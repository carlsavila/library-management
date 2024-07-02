import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittensComponent } from './kittens.component';

describe('KittensComponent', () => {
  let component: KittensComponent;
  let fixture: ComponentFixture<KittensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KittensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KittensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

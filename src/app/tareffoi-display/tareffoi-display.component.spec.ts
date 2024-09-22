import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareffoiDisplayComponent } from './tareffoi-display.component';

describe('TareffoiDisplayComponent', () => {
  let component: TareffoiDisplayComponent;
  let fixture: ComponentFixture<TareffoiDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareffoiDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TareffoiDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

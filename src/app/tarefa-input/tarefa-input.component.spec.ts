import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaInputComponent } from './tarefa-input.component';

describe('TarefaInputComponent', () => {
  let component: TarefaInputComponent;
  let fixture: ComponentFixture<TarefaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarefaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

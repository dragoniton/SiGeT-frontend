import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaWrapperComponent } from './tarefa-wrapper.component';

describe('TarefaWrapperComponent', () => {
  let component: TarefaWrapperComponent;
  let fixture: ComponentFixture<TarefaWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarefaWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

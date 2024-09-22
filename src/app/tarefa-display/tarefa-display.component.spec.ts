import { ComponentFixture, TestBed } from '@angular/core/testing';


import { TarefaDisplayComponent } from './tarefa-display.component';

describe('TarefaDisplayComponent', () => {
  let component: TarefaDisplayComponent;
  let fixture: ComponentFixture<TarefaDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

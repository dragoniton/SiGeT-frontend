import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TarefaDisplayComponent } from "../tarefa-display/tarefa-display.component";
import { Tarefa } from '../tarefa';
import { TarefaEditComponent } from '../tarefa-edit/tarefa-edit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefa-wrapper',
  standalone: true,
  imports: [TarefaDisplayComponent, TarefaEditComponent, CommonModule],
  templateUrl: './tarefa-wrapper.component.html',
  styleUrl: './tarefa-wrapper.component.css'
})
export class TarefaWrapperComponent {
  @Input() tarefa: Tarefa = new Tarefa(0,"","","","","");
  @Output() removeItemEvent = new EventEmitter();

  editable: boolean = false;

  handleEditClick(): void{
    this.editable = true;
  }

  handleSaveEdition(tarefa: Tarefa): void{
    this.editable = false;
    this.tarefa = tarefa;
  }

  handleCancelSave(): void{
    this.editable = false;
  }
}

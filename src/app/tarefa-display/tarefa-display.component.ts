import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Tarefa } from '../tarefa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefa-display',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './tarefa-display.component.html',
  styleUrl: './tarefa-display.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarefaDisplayComponent {

  @Input() tarefa: Tarefa = new Tarefa(0,"","","","","");
  @Output() editItemEvent = new EventEmitter();
  @Output() cancelEditItemEvent = new EventEmitter();
  @Output() removeItemEvent = new EventEmitter();
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TarefaDisplayComponent } from "../tarefa-display/tarefa-display.component";
import { Tarefa } from '../tarefa';
import { TarefaEditComponent } from '../tarefa-edit/tarefa-edit.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tarefa-wrapper',
  standalone: true,
  imports: [TarefaDisplayComponent, TarefaEditComponent, CommonModule, HttpClientModule],
  templateUrl: './tarefa-wrapper.component.html',
  styleUrl: './tarefa-wrapper.component.css'
})

export class TarefaWrapperComponent {
  @Input() tarefa: Tarefa = new Tarefa(0,"","","","","",false);
  @Output() removeItemEvent = new EventEmitter();

  editable: boolean = false;
  constructor(private http: HttpClient){}

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
  reloadTarefa(): void {//retorna os valores da tarefa ao cancelar edição
    this.http.get<Tarefa>(`http://localhost:8080/tarefas/${this.tarefa.id}`)
      .subscribe(data => this.tarefa = data);
  }

  handleConcludeClick(){
    if(this.tarefa.done==false){
      this.tarefa.done = true;
    }else{
      this.tarefa.done = false;
    }
  }
}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa } from '../tarefa';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-tarefa-edit',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './tarefa-edit.component.html',
  styleUrl: './tarefa-edit.component.css'
})
export class TarefaEditComponent {
  @Input() tarefa: Tarefa = new Tarefa(0,"","","","","");

  @Output() editItemEvent = new EventEmitter();
  @Output() cancelEditItemEvent = new EventEmitter();

  onSubmit(): void{
    this.http.post<Tarefa>(
      "http://localhost:8080/tarefas",
      this.tarefa
    ).subscribe(data => this.editItemEvent.emit(data));
  }

  constructor(private http: HttpClient){}

}

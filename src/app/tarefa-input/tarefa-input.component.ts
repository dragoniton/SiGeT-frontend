import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa } from '../tarefa';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-tarefa-input',
  standalone: true,
  imports:
  [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './tarefa-input.component.html',
  styleUrl: './tarefa-input.component.css'
})
export class TarefaInputComponent {

  @ViewChild("tarefaForm") tarefaForm!: NgForm;

  @Output() newDataEvent = new EventEmitter();

  constructor(private http: HttpClient){}

  onSubmit(): void{
    this.http.post<Tarefa>(
      "http://localhost:8080/tarefas",
      this.tarefaForm.value
    ).subscribe(data => this.newDataEvent.emit(data));
  }

}

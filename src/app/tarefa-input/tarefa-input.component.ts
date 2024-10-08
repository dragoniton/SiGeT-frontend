import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { Tarefa } from '../tarefa';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-tarefa-input',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports:
  [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './tarefa-input.component.html',
  styleUrl: './tarefa-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarefaInputComponent {

  @ViewChild("tarefaForm") tarefaForm!: NgForm;

  @Output() newDataEvent = new EventEmitter();


  constructor(private http: HttpClient){}

  ngOnInit(): void{

  }

  onSubmit(): void{
    this.tarefaForm.value.done = false;
    this.http.post<Tarefa>(
      "http://localhost:8080/tarefas",
      this.tarefaForm.value
    ).subscribe(data => this.newDataEvent.emit(data));
  }

}

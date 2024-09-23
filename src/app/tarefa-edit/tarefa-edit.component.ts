import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
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
  selector: 'app-tarefa-edit',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
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
  templateUrl: './tarefa-edit.component.html',
  styleUrl: './tarefa-edit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarefaEditComponent {
  @Input() tarefa: Tarefa = new Tarefa(0,"","","","","",false);
  tarefas: Tarefa[] = [];
  @Output() editItemEvent = new EventEmitter();
  @Output() cancelEditItemEvent = new EventEmitter();


  ngOnInit(): void{
    
  }

  onSubmit(): void{
    this.http.post<Tarefa>(
      "http://localhost:8080/tarefas",
      this.tarefa
    ).subscribe(data => this.editItemEvent.emit(data));
  }

  constructor(private http: HttpClient){}

}

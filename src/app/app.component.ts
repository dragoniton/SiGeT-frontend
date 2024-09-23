import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarefa } from './tarefa';
import { Tareffoi } from './tareffoi';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TarefaDisplayComponent } from "./tarefa-display/tarefa-display.component";
import { CommonModule } from '@angular/common';
import { TarefaInputComponent } from "./tarefa-input/tarefa-input.component";
import { TarefaWrapperComponent } from "./tarefa-wrapper/tarefa-wrapper.component";
import { TarefaEditComponent } from './tarefa-edit/tarefa-edit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TarefaDisplayComponent,
    HttpClientModule,
    CommonModule,
    TarefaInputComponent,
    TarefaWrapperComponent,
    TarefaEditComponent,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'SiGeT-frontend';
  tarefa: Tarefa = new Tarefa(0,"","","","","",false);
  tarefas: Tarefa[] = [];
  tareffoiss: Tareffoi[] = [];
  readonly panelOpenState = signal(false);
  tarefaBeingEdited: Tarefa | null = null;

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get<Tarefa[]>(
      "http://localhost:8080/tarefas"
    ).subscribe(data => this.tarefas = data);


  }
  appendData(newTarefa: any): void{
    this.tarefas.push(newTarefa);
    location.reload();
  }


  removeItem(tarefaId: number): void{
    this.http.delete(
      "http://localhost:8080/tarefas/" + tarefaId
    ).subscribe(data =>
      this.tarefas = this.tarefas.filter((tarefa: Tarefa) => tarefa.id != tarefaId)
    );
    location.reload();
  }


}

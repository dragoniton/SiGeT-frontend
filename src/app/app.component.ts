import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarefa } from './tarefa';
import { Tareffoi } from './tareffoi';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TarefaDisplayComponent } from "./tarefa-display/tarefa-display.component";
import { CommonModule } from '@angular/common';
import { TareffoiDisplayComponent } from './tareffoi-display/tareffoi-display.component';
import { TarefaInputComponent } from "./tarefa-input/tarefa-input.component";
import { TarefaWrapperComponent } from "./tarefa-wrapper/tarefa-wrapper.component";
import { TarefaEditComponent } from './tarefa-edit/tarefa-edit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TarefaDisplayComponent,
    HttpClientModule,
    CommonModule,
    TareffoiDisplayComponent,
    TarefaInputComponent,
    TarefaWrapperComponent,
    TarefaEditComponent,
    MatButtonModule,
    MatInputModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SiGeT-frontend';
  tarefas: Tarefa[] = [];
  tareffoiss: Tareffoi[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get<Tarefa[]>(
      "http://localhost:8080/tarefas"
    ).subscribe(data => this.tarefas = data);


    this.http.get<Tareffoi[]>(
      "http://localhost:8080/tareffoiss"
    ).subscribe(data => this.tareffoiss = data);
  }
  appendData(newTarefa: any): void{
    this.tarefas.push(newTarefa);
  }

  removeItem(tarefaId: number): void{
    this.http.delete(
      "http://localhost:8080/tarefas/" + tarefaId
    ).subscribe(data =>
      this.tarefas = this.tarefas.filter((tarefa: Tarefa) => tarefa.id != tarefaId)
    );
  }

  public sortTarefasIdAsc(){//organiza por id de menor para maior (ascending)
    this.tarefas = this.tarefas.sort((a, b) => {
      //se ids forem nulos, vão para o final da lista
      if (a.id == null) return 1;
      if (b.id == null) return -1;
      return a.id - b.id;
    });
  }

  public sortTarefasIdDesc(){//organiza por id de maior para menor (descending)
    this.tarefas = this.tarefas.sort((a, b) => {
      //se ids forem nulos, vão para o final da lista
      if (a.id == null) return 1;
      if (b.id == null) return -1;
      return b.id - a.id;
    });
  }

  filterBy(title: HTMLInputElement) {//filtrar buscando por título
    if (title.value) {
      this.tarefas = this.tarefas.filter(p => p.title === title.value)
    }
  }

}

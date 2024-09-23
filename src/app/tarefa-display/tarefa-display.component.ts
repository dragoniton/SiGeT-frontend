import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Tarefa } from '../tarefa';
import { CommonModule, DatePipe } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { ViewChild, AfterViewInit, inject} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule, SortDirection} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-tarefa-display',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    DatePipe,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    DatePipe,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCheckboxModule
  ],
  templateUrl: './tarefa-display.component.html',
  styleUrl: './tarefa-display.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TarefaDisplayComponent implements AfterViewInit {

  @Input() tarefa: Tarefa = new Tarefa(0, "", "", "", "", "", false);
  @Output() editItemEvent = new EventEmitter();
  @Output() cancelEditItemEvent = new EventEmitter<number>();
  @Output() removeItemEvent = new EventEmitter<number>();
  @Output() concludeItemEvent = new EventEmitter();

  tarefas: Tarefa[] = [];
  dataSource = new MatTableDataSource<Tarefa>(this.tarefas);
  displayedColumns: string[] = ['id', 'title', 'owner', 'priority', 'deadline', 'description','done', 'actions'];
  resultsLength = 0;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Tarefa[]>("http://localhost:8080/tarefas").subscribe(data => {
      this.tarefas = data;
      this.dataSource.data = this.tarefas;
      this.resultsLength = this.tarefas.length;
    });
  }

  ngOnChanges() {
    this.dataSource.data = this.tarefas;
    this.resultsLength = this.tarefas.length;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

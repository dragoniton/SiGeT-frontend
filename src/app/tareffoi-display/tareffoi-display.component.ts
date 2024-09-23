import { Component, Input } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Tareffoi } from '../tareffoi';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareffoi-display',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './tareffoi-display.component.html',
  styleUrl: './tareffoi-display.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TareffoiDisplayComponent {

  @Input() tareffoi: Tareffoi = new Tareffoi(0,"","","","","",false);
}

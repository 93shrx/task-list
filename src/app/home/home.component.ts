import { Component, DoCheck } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Itask } from '../interfaces/itask';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatGridListModule,
    MatCheckboxModule,
    NgClass,
    NgFor,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements DoCheck {
  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public tarefas: Itask[] = JSON.parse(localStorage.getItem('list') || '[]');

  addTarefa(tarefa: string, checked: boolean) {
    return this.tarefas.push({ tarefa, checked });
  }

  removeTarefa(event: number) {
    this.tarefas.splice(event, 1);
  }

  trackByFunction(index: number, item: any): number {
    return item.id; // Replace 'id' with the unique identifier property of your items
  }

  setLocalStorage() {
    if (this.tarefas) {
      localStorage.setItem('list', JSON.stringify(this.tarefas));
      // o array precisa ser convertido para string para o localstorage aceitar
    }
  }
}

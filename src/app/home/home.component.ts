import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importe o CommonModule para usar *ngFor

@Component({
  selector: 'app-home',
  standalone: true,  // Torna o componente standalone
  imports: [CommonModule],  // Importa o CommonModule para ter acesso a diretivas como *ngFor
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() progress = new EventEmitter<number>();
  @Output() reset = new EventEmitter<void>();

  levels = [
    { id: 1, name: 'Level 1' },
    { id: 2, name: 'Level 2' },
    { id: 3, name: 'Level 3' }
  ];

  submitCode(level: number, userCode: string) {
    if (this.isValidCode(level, userCode)) {
      this.progress.emit(level + 1);  // Emite o próximo nível
    }
  }

  isValidCode(level: number, code: string): boolean {
    return true;  // Lógica de validação do código
  }

  resetGame() {
    this.reset.emit();  // Emite evento de reset
  }
}

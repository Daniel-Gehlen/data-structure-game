import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() progress = new EventEmitter<number>();
  @Output() reset = new EventEmitter<void>();

  // Método para submeter o código e avançar o nível
  submitCode(level: number, userCode: string) {
    // Lógica para verificar o código do usuário por nível
    // Exemplo simplificado, aqui você pode adicionar mais regras para verificar o código do usuário
    if (this.isValidCode(level, userCode)) {
      this.progress.emit(level + 1); // Avança para o próximo nível
    }
  }

  isValidCode(level: number, code: string): boolean {
    // Lógica para validar o código de cada nível (aqui você pode adicionar regras específicas)
    return true;
  }

  resetGame() {
    this.reset.emit(); // Resetar o progresso
  }
}

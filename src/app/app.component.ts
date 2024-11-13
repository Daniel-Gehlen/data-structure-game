import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcomeMessage: string = 'Bem-vindo ao Jogo!';
  languageToggleText: string = 'Trocar Idioma';
  resetButtonText: string = 'Reiniciar Jogo';

  // Títulos dos níveis
  levelTitles: string[] = ['Nível 1', 'Nível 2', 'Nível 3'];

  // Instruções para cada nível
  instructions: string[] = [
    'Instruções do Nível 1',
    'Instruções do Nível 2',
    'Instruções do Nível 3'
  ];

  // Função para alternar o idioma
  toggleLanguage() {
    this.languageToggleText = this.languageToggleText === 'Trocar Idioma' ? 'Change Language' : 'Trocar Idioma';
    this.welcomeMessage = this.welcomeMessage === 'Bem-vindo ao Jogo!' ? 'Welcome to the Game!' : 'Bem-vindo ao Jogo!';
    this.resetButtonText = this.resetButtonText === 'Reiniciar Jogo' ? 'Reset Game' : 'Reiniciar Jogo';
  }

  // Função para reiniciar o progresso do jogo
  resetProgress() {
    console.log('Progresso reiniciado!');
  }
}

import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-language-switcher',
  template: `<button (click)="toggleLanguage()">{{ getButtonLabel() }}</button>`
})
export class LanguageSwitcherComponent {

  constructor(private gameService: GameService) {}

  toggleLanguage() {
    this.gameService.switchLanguage();
  }

  getButtonLabel() {
    return this.gameService.getCurrentLanguage() === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês';
  }
}

import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-level',
  template: `
    <div>
      <h2>{{ levelTitle }}</h2>
      <p>{{ levelInstruction }}</p>
      <button>{{ submitButtonText }}</button>
    </div>
  `
})
export class LevelComponent implements OnInit {
  levelTitle: string;
  levelInstruction: string;
  submitButtonText: string;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    const texts = this.gameService.getTexts();
    this.levelTitle = texts.levelTitles[this.gameService.getLevel() - 1];
    this.levelInstruction = texts.instructions[this.gameService.getLevel() - 1];
    this.submitButtonText = texts.submitButton;
  }
}

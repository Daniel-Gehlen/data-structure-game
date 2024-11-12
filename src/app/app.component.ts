import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = 'Student';
  isPortuguese: boolean = false;
  currentLevel: number = 0;
  maxLevel: number = 6;

  toggleLanguage() {
    this.isPortuguese = !this.isPortuguese;
  }

  setProgress(level: number) {
    this.currentLevel = level;
  }

  resetProgress() {
    this.currentLevel = 0;
  }
}

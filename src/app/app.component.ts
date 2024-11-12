import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';  // Importe o HomeComponent
import { ProgressComponent } from './progress/progress.component';  // Importe o ProgressComponent

@Component({
  selector: 'app-root',
  standalone: true,  // Torna o AppComponent standalone
  imports: [HomeComponent, ProgressComponent],  // Certifique-se de importar os componentes necessários
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

  setProgress(level: number): void {
    this.currentLevel = level;
  }

  resetProgress(): void {
    this.currentLevel = 0;
  }
}

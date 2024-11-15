import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,  // Torna o ProgressComponent standalone
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  @Input() currentLevel: number = 0;
  @Input() maxLevel: number = 6;
}

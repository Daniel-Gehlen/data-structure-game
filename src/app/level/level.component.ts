import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  @Input() title: string = '';
  @Input() instruction: string = '';
  @Input() level: number = 0;

  // Variável para armazenar a entrada do código do usuário
  userCodeInput: string = '';

  // Feedback para o usuário
  feedback: string = '';

  // Emitir o código para o componente pai, se necessário
  @Output() codeEntered = new EventEmitter<string>();
getCurrentLevel: any;

  constructor(private readonly progressService: ProgressService) {}

  ngOnInit() {
    // Define feedback inicial para níveis bloqueados
    if (this.level > this.progressService.currentLevel) {
      this.feedback = "Locked";
    }
  }

  // Método chamado quando o usuário insere código
  onCodeInput(event: Event) {
    this.userCodeInput = (event.target as HTMLTextAreaElement).value;
    this.codeEntered.emit(this.userCodeInput); // Emite o código para o componente pai
  }

  // Método chamado ao enviar o código para verificação
  onSubmitCode() {
    const expectedCode: string = this.progressService.getExpectedCode(this.level);
    if (this.userCodeInput.trim() === expectedCode) {
      this.feedback = "Correct!";
      this.progressService.updateProgress(this.level);
    } else {
      this.feedback = "Try again!";
    }
  }
}

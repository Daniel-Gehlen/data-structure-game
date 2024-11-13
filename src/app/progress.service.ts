import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  currentLevel: number = 0;

  constructor() {
    this.loadProgress();
  }

  loadProgress() {
    this.currentLevel = parseInt(localStorage.getItem('currentLevel') ?? '0', 10);
  }

  updateProgress(level: number) {
    this.currentLevel = level + 1;
    localStorage.setItem('currentLevel', this.currentLevel.toString());
  }

  resetProgress() {
    this.currentLevel = 0;
    localStorage.removeItem('currentLevel');
  }

  getExpectedCode(level: number): string {
    const codes = [
      "class Queue { constructor() { this.first = null; this.last = null; this.size = 0; } }",
      "enqueue(value) { const newNode = { value: value, next: null }; if (this.isEmpty()) { this.first = newNode; this.last = newNode; } else { this.last.next = newNode; this.last = newNode; } this.size++; return this; }",
      "dequeue() { if (this.isEmpty()) return null; const removedNode = this.first; this.first = this.first.next; if (this.first === null) { this.last = null; } this.size--; return removedNode.value; }",
      "isEmpty() { return this.size === 0; }",
      "const fila = new Queue(); fila.enqueue(10); fila.enqueue(20); fila.enqueue(30);",
      "fila.dequeue(); fila.dequeue();"
    ];
    return codes[level - 1] || '';
  }

  showExplanation(input: string) {
    //const words = input.split(/\s+/);
    //const lastWord = words[words.length - 1].trim();
    // Additional logic to show an explanation balloon
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExplanationService {
  getTexts(language: string): { [key: string]: string | string[] | { [key: string]: string } } {
    const texts: { [key: string]: { [key: string]: string | string[] | { [key: string]: string } } } = {
      en: {
        welcome: "Welcome, ",
        intro: "This is an introduction to linked lists.",
        resetButton: "Reset Progress",
        switchLanguage: "Switch to Portuguese",
        levelTitles: [
          "Level 1: Queue Class",
          "Level 2: Enqueue Method",
          "Level 3: Dequeue Method",
          "Level 4: isEmpty Method",
          "Level 5: Using the Queue",
          "Level 6: Dequeue Actions"
        ],
        instructions: [
          "Define a Queue class with properties first, last, and size.",
          "Add an enqueue method to add elements to the queue.",
          "Add a dequeue method to remove elements from the queue.",
          "Create an isEmpty method to check if the queue is empty.",
          "Initialize a queue and add elements.",
          "Remove elements from the queue."
        ],
        explanations: { ";": "Semicolon explanation...", "class": "Class explanation..." }
      },
      pt: {
        welcome: "Bem-vindo, ",
        intro: "Esta é uma introdução às listas ligadas.",
        resetButton: "Redefinir Progresso",
        switchLanguage: "Mudar para Inglês",
        levelTitles: [
          "Nível 1: Classe Fila",
          "Nível 2: Método Enqueue",
          "Nível 3: Método Dequeue",
          "Nível 4: Método isEmpty",
          "Nível 5: Usando a Fila",
          "Nível 6: Ações de Dequeue"
        ],
        instructions: [
          "Defina uma classe Fila com as propriedades first, last e size.",
          "Adicione um método enqueue para adicionar elementos na fila.",
          "Adicione um método dequeue para remover elementos da fila.",
          "Crie um método isEmpty para verificar se a fila está vazia.",
          "Inicialize uma fila e adicione elementos.",
          "Remova elementos da fila."
        ],
        explanations: { ";": "Explicação sobre o ponto e vírgula...", "class": "Explicação sobre a classe..." }
      }
    };
    return texts[language as keyof typeof texts] || texts['en'];
  }}
// src/app/level/level.module.ts
import { NgModule } from '@angular/core';
import { LevelComponent } from './level.component';

@NgModule({
  declarations: [LevelComponent],
  exports: [LevelComponent]  // Exportação do LevelComponent para ser utilizado em outros módulos
})
export class LevelModule { }

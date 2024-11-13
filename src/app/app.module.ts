// src/app/app.module.ts
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LevelComponent } from './level/level.component'; // Asegure-se de que o caminho está correto
import { FormsModule } from '@angular/forms';
import { LevelModule } from './level/level.module';

@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LevelModule // Importação do módulo que contém o LevelComponent
  ],
  providers: [],
  bootstrap: [AppComponent, LevelModule],
  schemas: [NO_ERRORS_SCHEMA]  // Adicionando CUSTOM_ELEMENTS_SCHEMA aqui

})
export class AppModule { }

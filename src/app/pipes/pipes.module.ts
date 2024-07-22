import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDescriptionPipe } from './game-description.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';



@NgModule({
  declarations: [
    GameDescriptionPipe,
    DashIfEmptyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [GameDescriptionPipe, DashIfEmptyPipe]
})
export class PipesModule { }

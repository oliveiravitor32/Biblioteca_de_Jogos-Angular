import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateGameDescriptionPipe } from './truncate-game-description.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';

@NgModule({
  declarations: [TruncateGameDescriptionPipe, DashIfEmptyPipe],
  imports: [CommonModule],
  exports: [TruncateGameDescriptionPipe, DashIfEmptyPipe],
})
export class PipesModule {}

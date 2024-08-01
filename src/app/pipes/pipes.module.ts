import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateGameDescriptionPipe } from './truncate-game-description.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';
import { MinimumRecommendedPcRequirementsPipe } from './minimum-recommended-pc-requirements.pipe';

@NgModule({
  declarations: [
    TruncateGameDescriptionPipe,
    DashIfEmptyPipe,
    MinimumRecommendedPcRequirementsPipe,
  ],
  imports: [CommonModule],
  exports: [
    TruncateGameDescriptionPipe,
    DashIfEmptyPipe,
    MinimumRecommendedPcRequirementsPipe,
  ],
})
export class PipesModule {}

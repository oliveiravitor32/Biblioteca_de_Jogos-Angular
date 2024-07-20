import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresComponent } from './genres.component';
import { GenreCardComponent } from './genre-card/genre-card.component';
import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';

@NgModule({
  declarations: [GenresComponent, GenreCardComponent],
  imports: [CommonModule, GenresRoutingModule, SharedMaterialModule],
})
export class GenresModule {}

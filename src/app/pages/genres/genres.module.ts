import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresComponent } from './genres.component';
import { GenreCardComponent } from './genre-card/genre-card.component';

@NgModule({
  declarations: [GenresComponent, GenreCardComponent],
  imports: [CommonModule, GenresRoutingModule],
})
export class GenresModule {}

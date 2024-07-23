import { IGameGenre } from '../../interfaces/genre/game-genre.interface';
import { CacheService } from '../../services/cache.service';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  genreList: IGameGenre[] = [];

  constructor(
    private gameService: GameService,
    private cacheService: CacheService
  ) {}

  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    if (this.cacheService.getGenresCache().length != 0) {
      this.genreList = this.cacheService.getGenresCache();
      this.loading = false;
    } else {
      this.gameService.getGameGenres().subscribe({
        next: (resp) => {
          this.loading = false;

          this.cacheService.setGenresCache(resp.results);

          this.genreList = resp.results;
        },
      });
    }
  }
}

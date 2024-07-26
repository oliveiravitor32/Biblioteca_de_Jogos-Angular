import { Router } from '@angular/router';
import { IGameGenre } from '../../interfaces/genre/game-genre.interface';
import { CacheService } from '../../services/cache.service';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss', './genres.responsive.component.scss'],
})
export class GenresComponent implements OnInit {
  genreList: IGameGenre[] = [];

  constructor(
    private readonly gameService: GameService,
    private readonly cacheService: CacheService,
    private readonly router: Router
  ) {}

  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    const CACHE_EMPTY = this.cacheService.getGenresCache().length === 0;

    if (!CACHE_EMPTY) {
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

  onSelectGenre(genre: IGameGenre) {
    this.router.navigate([`search`], { queryParams: { genres: genre.id } });
  }
}

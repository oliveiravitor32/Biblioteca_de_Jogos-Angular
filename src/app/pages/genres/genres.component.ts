import { IListGameGenres } from '../../interfaces/list-game-genres.interface';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  genreList: IListGameGenres = {} as IListGameGenres;

  constructor(private gameService: GameService) {}

  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.gameService.getGameGenres().subscribe({
      next: (resp) => {
        this.loading = false;
        this.genreList = resp;
      },
    });
  }
}

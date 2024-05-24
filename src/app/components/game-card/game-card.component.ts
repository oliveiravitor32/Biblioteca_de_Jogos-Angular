import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  constructor(private router: Router) {}

  navigateToGameDetailsPage() {
    this.router.navigate(['/game-details']);
  }
}

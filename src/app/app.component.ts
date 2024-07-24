import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'GameLibrary';

  searchGameForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.searchGameForm = this.formBuilder.group({
      gameToSearch: ['', Validators.required],
    });
  }

  onSubmitSearchGame(event: Event) {
    event.preventDefault();
    this.router.navigate([`search`], {
      queryParams: { game: this.searchGameForm.get('gameToSearch')!.value },
    });
    this.searchGameForm.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.responsive.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GameLibrary';

  searchGameForm!: FormGroup;

  isMobileMenuOpen: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.searchGameForm = this.formBuilder.group({
      gameToSearch: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // fecha menu quando ocorrer navegação de rota
        this.isMobileMenuOpen = false;
      }
    });
  }

  onSubmitSearchGame(event: Event) {
    event.preventDefault();
    this.router.navigate([`search`], {
      queryParams: { game: this.searchGameForm.get('gameToSearch')!.value },
    });
    this.searchGameForm.reset();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}

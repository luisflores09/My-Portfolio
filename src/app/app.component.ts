import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ThemeMode, ThemeService } from './theme.service';

type NavLink = {
  label: string;
  path: string;
  exact?: boolean;
};

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'My Portfolio';

  navLinks: NavLink[] = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about' },
    { label: 'Experience/Skills', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ];

  isDarkMode = false;

  private readonly themeService = inject(ThemeService);

  constructor() {
    const initialMode: ThemeMode = this.themeService.getInitialMode();
    this.isDarkMode = initialMode === 'dark';
    this.themeService.setMode(initialMode);
  }

  setDarkMode(isDarkMode: boolean): void {
    this.isDarkMode = isDarkMode;
    this.themeService.setMode(isDarkMode ? 'dark' : 'light');
  }
}

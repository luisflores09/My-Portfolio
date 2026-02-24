import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

type ProjectLink = {
  name: string;
  description: string;
  url: string;
};

@Component({
  selector: 'app-projects-page',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPageComponent {
  projects: ProjectLink[] = [
    {
      name: 'Project 1',
      description: 'Short description of what it does.',
      url: 'https://example.com'
    },
    {
      name: 'Project 2',
      description: 'Short description of what it does.',
      url: 'https://example.com'
    }
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

type Skill = {
  name: string;
  icon: string;
};

@Component({
  selector: 'app-experience-page',
  imports: [MatCardModule],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencePageComponent {
  experienceHighlights: string[] = [
    'Deliver responsive, accessible front ends (Angular/TypeScript, React) with maintainable component structure.',
    'Design and integrate REST APIs across stacks (.NET/Express/Flask) with clear contracts, validation, and error handling.',
    'Implement secure authentication and authorization (JWT/OAuth/OpenID) and follow safe client/server patterns.',
    'Model relational data with integrity in mind (EF Core + SQL Server), including migrations and constraints.',
    'Improve reliability through testing, CI/CD, Docker, and environment-based configuration.',
    'Communicate trade-offs and ship iteratively—delivering smaller slices, gathering feedback, and polishing confidently.'
  ];

  skills: Skill[] = [
    { name: 'Angular', icon: '/skills/angular.svg' },
    { name: 'TypeScript', icon: '/skills/typescript.svg' },
    { name: 'RxJS', icon: '/skills/rxjs.svg' },
    { name: 'HTML', icon: '/skills/html5.svg' },
    { name: 'SCSS/CSS', icon: '/skills/css3.svg' },
    { name: 'C#', icon: '/skills/dotnet.svg' },
    { name: '.NET / ASP.NET Core', icon: '/skills/dotnet.svg' },
    { name: 'Entity Framework Core', icon: '/skills/efcore.svg' },
    { name: 'SQL Server', icon: '/skills/sqlserver.svg' },
    { name: 'Node.js / Express', icon: '/skills/express.svg' },
    { name: 'Flask', icon: '/skills/flask.svg' },
    { name: 'Docker', icon: '/skills/docker.svg' },
    { name: 'GitHub Actions', icon: '/skills/githubactions.svg' },
    { name: 'Jest / Unit Testing', icon: '/skills/jest.svg' },
    { name: 'REST / Auth (OAuth, JWT)', icon: '/skills/jwt.svg' }
  ];
}

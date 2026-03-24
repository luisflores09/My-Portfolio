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
    'Delivered responsive, accessible front ends (Angular/TypeScript, React) with maintainable component structure.',
    'Designed and integrated REST APIs across stacks (.NET/Express/Flask) with clear contracts, validation, and error handling.',
    'Implemented secure authentication and authorization (JWT/OAuth/OpenID) and followed safe client/server patterns.',
    'Participated in a cybersecurity tournament, learning common API vulnerabilities and applying OWASP Top 10 concepts (auth, access control, input validation).',
    'Modeled relational data with integrity in mind (EF Core + SQL Server), including migrations and constraints.',
    'Improved reliability through testing, CI/CD, Docker, and environment-based configuration.',
    'Communicated trade-offs and shipped iteratively—delivering smaller slices, gathering feedback, and polishing confidently.'
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

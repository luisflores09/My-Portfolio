import { ChangeDetectionStrategy, Component } from '@angular/core';

type Skill = {
  name: string;
  icon: string;
};

@Component({
  selector: 'app-experience-page',
  imports: [],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencePageComponent {
  experienceHighlights: string[] = [
    'Build modern front ends (Angular/TypeScript, React) with responsive layout and clean component architecture.',
    'Design and integrate REST APIs across stacks (.NET/Express/Flask), including DTO-driven contracts and error handling.',
    'Implement authentication flows (OAuth, JWT, OpenID) and secure cross-origin/session behavior.',
    'Model relational data with integrity in mind (EF Core + SQL Server, migrations, unique constraints).',
    'Ship with reliability: tests, CI/CD, Docker packaging, and environment-based configuration.',
    'Use AI tools to accelerate delivery (scaffolding, refactors, test creation) with human review and production standards.'
  ];

  skills: Skill[] = [
    { name: 'Angular', icon: '/skills/angular.svg' },
    { name: 'TypeScript', icon: '/skills/typescript.svg' },
    { name: 'RxJS', icon: '/skills/rxjs.svg' },
    { name: 'HTML', icon: '/skills/html5.svg' },
    { name: 'SCSS/CSS', icon: '/skills/css3.svg' },
    { name: '.NET / ASP.NET Core', icon: '/skills/dotnet.svg' },
    { name: 'Entity Framework Core', icon: '/skills/efcore.svg' },
    { name: 'SQL Server', icon: '/skills/sqlserver.svg' },
    { name: 'Node.js / Express', icon: '/skills/express.svg' },
    { name: 'Flask', icon: '/skills/flask.svg' },
    { name: 'Docker', icon: '/skills/docker.svg' },
    { name: 'Nginx', icon: '/skills/nginx.svg' },
    { name: 'GitHub Actions', icon: '/skills/githubactions.svg' },
    { name: 'Jest / Unit Testing', icon: '/skills/jest.svg' },
    { name: 'REST / Auth (OAuth, JWT)', icon: '/skills/jwt.svg' }
  ];
}

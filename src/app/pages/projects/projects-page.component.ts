import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

type Project = {
    id: string;
    name: string;
    repoUrl?: string;
    deployedUrl?: string;
    recordingUrl?: string;
    includeContribution: boolean;

    purposeGoals?: string;
    features?: string[];
    contribution?: string;
    skills?: string[];
    skillsEvidence?: string;
    takeaways?: string;

    // Optional add-ons
    diagramsWireframes?: string;
    screenshotsGifs?: string;
};

@Component({
    selector: 'app-projects-page',
    imports: [MatCardModule, MatButtonModule, MatExpansionModule],
    templateUrl: './projects-page.component.html',
    styleUrl: './projects-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPageComponent {
    projects: Project[] = [
        {
            id: 'inventory-application',
            name: 'Inventory Application (Full-Stack Project)',
            repoUrl: "https://github.com/Runtime-Terror123/InventoryApp",
            deployedUrl: "https://inventoryapp-r8aa.onrender.com/",
            recordingUrl: "https://www.youtube.com/watch?v=BE4Er_-gc0o",
            includeContribution: true,
            purposeGoals: "We are a team of developers for an e-commerce company. The Engineering team is rebuilding their inventory tracking app from the ground up. Your team has been tasked with creating a Full-Sack (front and back end) RESTful CRUD application to track the items.",
            features: [
                "Full CRUD inventory workflow (create, read, update, delete) with a RESTful Express API and Sequelize data model.",
                "View all items in a dynamic front-end list backed by a GET route.",
                "Open a single item detail view using a GET-by-id route.",
                "Add new items via a front-end form that submits to a POST route and persists to the database.",
                "Edit item details via an update form that submits to a PUT route.",
                "Remove items from the detail view via a DELETE route."
            ],
            contribution:
                "I built and extended the Items feature end-to-end, including the backend item model and item-by-id route, and the frontend single-item view experience. I improved the UI/UX by making the item views and item cards mobile-friendly and updating styling for better readability and layout. I styled the Add Item screen using MUI and kept the codebase consistent by formatting changes with Prettier.",
            skills: [
                "Technical: React component development",
                "Technical: Express/REST API routing",
                "Technical: Data modeling",
                "Technical: Responsive CSS",
                "Technical: Integrating a UI library (MUI)",
                "Technical: Writing/debugging tests",
                "Durable: Collaborating through git/GitHub",
                "Durable: Breaking work into shippable PRs",
                "Durable: Iterating based on feedback",
                "Durable: Building maintainable, user-friendly design"
            ],
            skillsEvidence:
                "I delivered a full vertical slice (API + UI) for viewing and managing inventory items, showing I can connect backend contracts to frontend behavior. I applied responsive design techniques (like media queries and component-level styling) to make the app usable across screen sizes. I used formatting and testing practices to make my changes easier to review, safer to merge, and easier to maintain over time.",
            takeaways:
                "I learned that aligning the API shape with UI requirements early (IDs, routes, payload structure) prevents rework and speeds up development. I saw firsthand that responsive design and UI polish take iteration, but they produce a noticeable improvement in the user experience. I reinforced that clean commits, consistent formatting, and basic test coverage make teamwork smoother and reduce regressions.",
            diagramsWireframes: "/Inventory-App-Wireframe.png",
            screenshotsGifs: "/Inventory-App.jpeg"
        },
        {
            id: 'final-bootcamp-project',
            name: 'DrivingEd-App (Final Bootcamp Project)',
            repoUrl: "https://github.com/luisflores09/DrivingEd-App",
            deployedUrl: undefined,
            recordingUrl: "https://www.youtube.com/watch?v=xzlWR1KAluA",
            includeContribution: true,
            purposeGoals:
                'I built DrivingEd-App to streamline how a driving school manages people (students/instructors/admins) and schedules lessons, replacing manual/phone-based booking with a simple web workflow. The goal was to deliver a complete full-stack .NET app end-to-end (database → API → UI) and deploy it to a real environment.',
            features: [
                'ASP.NET Core Web API with CRUD endpoints for users and appointments (list, view by ID, update, delete).',
                'Role-based user listing (for example, retrieving instructors separately) to support the scheduling flow.',
                'Blazor Server UI with registration + form validation, plus user list/detail pages with edit and delete actions.',
                'Scheduling workflow: instructors list and an appointment-creation modal to book lessons.',
                'Appointments page showing scheduled lessons with linked instructor/student details.',
                'SQL Server + EF Core migrations with seed data, plus environment-based configuration (local vs hosted API).'
            ],
            contribution:
                'I designed and implemented the full stack end-to-end (database schema + EF Core models/migrations, REST controllers, and Blazor pages/components). I also handled UI ↔ API integration (HTTP calls + config-driven base URLs) and initial Azure deployment connectivity for the API and database.',
            skills: [
                'Technical: ASP.NET Core Web API (routing, controllers, request/response patterns)',
                'Technical: Entity Framework Core + SQL Server (DbContext, relationships, migrations, seeding)',
                'Technical: Blazor Server UI (components/pages, data binding, validation)',
                'Technical: API integration from the UI (async calls, JSON serialization, error handling)',
                'Technical: Environment-based configuration (local vs hosted API)',
                'Technical: Intro cloud deployment exposure (Azure App Service + Azure SQL)',
                'Durable: End-to-end ownership and prioritization (shipping an MVP)',
                'Durable: Problem decomposition (data model → API → UI workflows)',
                'Durable: Debugging and iteration across the full stack',
                'Durable: Making scope tradeoffs to deliver'
            ],
            skillsEvidence:
                'This project shows backend engineering (modeling users/appointments, configuring relationships, running migrations, and exposing REST endpoints) and frontend engineering (turning endpoints into real workflows like registration, listing/editing, and scheduling). It also shows integration and delivery skills by using config-driven API URLs, consuming real appointment objects with linked user data, and seeding the database so the app can be demoed quickly in both local and deployed environments.',
            takeaways:
                'Building a clean data model and API contract early made the Blazor UI work much faster and reduced rework. I also learned how important environment configuration is when moving from local development to a hosted deployment. If I continued, I would focus on production readiness (auth, secure password storage, secrets management, and tighter validation/error handling).',
            diagramsWireframes: '/DrivingEd-App-data-model.svg',
            screenshotsGifs: '/DrivingEd-App.jpeg'
        },
        {
            id: 'back-end-module-project',
            name: 'EchoPlay-API (Back End Module Project)',
            repoUrl: "https://github.com/EchoSync-369/EchoPlay-API",
            deployedUrl: undefined,
            recordingUrl: "https://www.youtube.com/watch?v=KRyscIFtUDk",
            includeContribution: true,
            purposeGoals:
                'I built EchoPlay-API as the backend for my EchoPlay app, focused on authenticating users via Spotify and persisting user-specific data (favorites, categories, and search history) in SQL Server. The goal was a clean, front-end-friendly REST API secured with JWT authorization so an Angular client can call protected endpoints after login.',
            features: [
                'Spotify-based login: accepts a Spotify access token, fetches the user profile from the Spotify “/me” endpoint, creates the user on first login, and returns an app JWT for subsequent calls.',
                'JWT auth wired into the ASP.NET Core pipeline with protected endpoints enforced via authorization attributes.',
                'Favorites system for tracks/artists/albums with duplicate prevention and optional categorization.',
                'Category CRUD for organizing favorites, including per-user uniqueness of category names.',
                'Per-user search history with deduplication and recency ordering, plus an admin-only endpoint to view another user’s history.',
                'EF Core code-first + migrations with relational constraints (unique indexes, delete behaviors) to keep data consistent.'
            ],
            contribution:
                'I partnered with another developer to build the API. My contributions included the API design, data modeling, EF Core configuration/migrations, authentication/authorization wiring, controller + DTO implementation, and runtime configuration (CORS/logging/JWT wiring).',
            skills: [
                'Technical: ASP.NET Core Web API (.NET 9), RESTful endpoint design, DTO validation',
                'Technical: JWT authentication/authorization',
                'Technical: EF Core + SQL Server, code-first migrations',
                'Technical: External API integration (Spotify)',
                'Technical: Request/diagnostic logging and runtime configuration',
                'Durable: Collaborative delivery and turning requirements into a coherent data model + API',
                'Durable: Iterative development (migrations over time) and designing for data integrity (unique constraints, delete rules, deduplication)'
            ],
            skillsEvidence:
                'This project demonstrates backend delivery by integrating an external identity provider (Spotify) and issuing JWTs, then enforcing protected endpoints for user-specific data. It also shows “defense in depth” by encoding integrity rules in the database layer (unique indexes, delete behaviors) and using DTOs so the frontend depends on stable API contracts rather than EF entities.',
            takeaways:
                'I learned that enforcing integrity in the database (unique indexes + FK rules) makes the API simpler and more reliable. I also gained a better feel for real-world auth tradeoffs (token lifetime, logout/revocation) and for designing endpoints around frontend needs (summary/grouped views and deduped history instead of pushing all computation to the client).',
            diagramsWireframes: '/EchoPlay-API-data-models.svg',
            screenshotsGifs: undefined
        },
        {
            id: 'front-end-module-project',
            name: 'EchoPlay (Front End Module Project)',
            repoUrl: "https://github.com/EchoSync-369/EchoPlay",
            deployedUrl: undefined,
            recordingUrl: "https://www.youtube.com/watch?v=rPibrvJNnZU",
            includeContribution: true,
            purposeGoals:
                'I built EchoPlay to be a clean, responsive music discovery app that makes it fast to find new music, search across Spotify content, and play/share what I find without leaving the experience. My goals were to practice real-world Angular architecture (routing, services, guards, reactive state), integrate Spotify end-to-end, and ship a portfolio-ready UI with strong UX, theming, and test coverage.',
            features: [
                '“New Releases” experience that pulls Spotify’s latest albums and displays them in a responsive carousel.',
                'Universal search flow that queries Spotify and shows categorized results (albums, artists, playlists, tracks), with direct routing into a player view.',
                'Embedded Spotify player page with deep-linking (`/player/:type/:id`) and theme-aware light/dark embed behavior.',
                'Authentication + route protection using guards, including token storage and recovery behaviors.',
                'Favorites functionality (including a dashboard view) backed by an authenticated API, with add/remove actions directly in the UI.',
                'Search history suggestions in the search bar (recent searches with quick re-run and delete).'
            ],
            contribution:
                'I designed and implemented the front-end architecture (routes, standalone components, services, and UI composition). I integrated Spotify OAuth + API calls with token handling in localStorage and wired auth state into navigation. I built reusable UI components (navbar, carousel, search bar, theming toggle, favorites actions) and connected them to real data flows, then set up Jest unit testing to keep the codebase reliable as features grew.',
            skills: [
                'Technical: Angular 19 (standalone components), routing, route guards, HttpClient',
                'Technical: RxJS reactive state (Subjects/BehaviorSubjects, subscriptions, `combineLatest`)',
                'Technical: TypeScript modeling and mapping Spotify API responses into UI-friendly shapes',
                'Technical: OAuth/token workflows and authenticated request patterns',
                'Technical: PrimeNG component integration and responsive UI patterns',
                'Technical: Theming via CSS + DOM class toggles and embed/page-level UX integration',
                'Technical: Unit testing with Jest',
                'Durable: Product thinking (feature prioritization + UX iteration)',
                'Durable: Debugging auth/API integration issues and designing maintainable service boundaries'
            ],
            skillsEvidence:
                'I used Angular routing + guards to enforce authenticated vs unauthenticated navigation and to control layout behavior (like contextual search visibility). I built service-based reactive state (auth and favorites) so components react to changes instead of re-fetching everywhere, and I handled real integration constraints (token expiration/401 behavior, persistence, and async loading states) with UX patterns like loading indicators and error handling.',
            takeaways:
                'I learned how quickly complexity grows when auth + third-party APIs + UI state intersect, and why clear separation between API services, state, and presentation components matters. I got better at designing for resilience (token failures, null/partial API data, async race conditions), and reinforced that polish (responsive layout, theming, loading states, navigation clarity) is what makes an app feel complete.',
            diagramsWireframes: '/EchoPlay-App-data-models.svg',
            screenshotsGifs: '/EchoPlay-App.jpeg'
        },
        {
            id: 'deployment-module-project',
            name: 'Pixel Forge (Deployment Module Project)',
            repoUrl: "https://github.com/PixelForgeArcade/PixelForgeApp",
            deployedUrl: "https://pixelforge-frontend-latest.onrender.com/",
            recordingUrl: "https://www.youtube.com/watch?v=NjoCwuKmnZI",
            includeContribution: true,
            purposeGoals:
                'I built PixelForge as a small full-stack Angular + Flask app to prove out a real-world authentication flow (Steam OpenID), secure session handling across separate frontend/backend domains, and an end-to-end DevOps pipeline (tests → Docker build → push → deploy). My goal was to make deployments repeatable and safe so every change is tested, packaged the same way, and promoted automatically to production.',
            features: [
                'Steam OpenID login with backend OpenID verification and a server-side session established in Flask (`app.py`).',
                'Session-based auth checks from the frontend using credentialed requests (`fetch(..., { credentials: \'include\' })`) to confirm login status and fetch profile data (`landing-page.component.ts`).',
                'Steam profile retrieval via Steam Web API (GetPlayerSummaries) returning a curated “public profile” JSON object to the frontend (`app.py`).',
                'Containerized frontend + backend: multi-stage Angular build served by Nginx with SPA routing + long-term static asset caching (`Dockerfile`, `nginx.conf`), and Flask served via Gunicorn with `$PORT` support (`Dockerfile`).',
                'CI/CD workflow that runs unit tests + production build on PRs/pushes, then on `master` builds/pushes a Docker image and triggers a Render deploy hook (`build.yml`).'
            ],
            contribution:
                'Solo development: I built the Angular app and Flask API end-to-end, implemented Steam auth + session behavior, containerized both services, and created the CI/CD pipeline. I also wrote the setup/deployment documentation and structured the repo to be easy to run locally or deploy remotely.',
            skills: [
                'Technical: Angular (standalone components + routing) and frontend architecture',
                'Technical: Flask API design and session-based authentication',
                'Technical: Steam OpenID integration and external API consumption',
                'Technical: Secure cookie/session configuration, credentialed CORS across domains',
                'Technical: Docker multi-stage builds and runtime packaging',
                'Technical: Nginx SPA routing + caching headers',
                'Technical: GitHub Actions CI/CD, secrets management, and environment injection via build args',
                'Durable: End-to-end ownership and debugging distributed frontend ↔ backend issues',
                'Durable: Security-minded thinking (cookie flags + cross-site behavior) and clear documentation',
                'Durable: Designing for automation and repeatability'
            ],
            skillsEvidence:
                'I handled the “separate domains” deployment correctly by enabling credentialed CORS and configuring session cookies for cross-site usage (for example, `SameSite=None`, `Secure`, `HttpOnly`) in the backend (`app.py`). I set up release quality gates by running tests and a production build before any deployment, and packaged the frontend with a multi-stage Docker build served via Nginx with SPA routing and caching headers (`Dockerfile`, `nginx.conf`). I also injected the production backend URL at build time so the container build stays reproducible across environments.',
            takeaways:
                'I learned that authentication complexity shows up most after deployment: cross-site cookies, CORS, redirects, and environment configuration all have to align. I also learned to treat CI/CD as part of the product—shipping immutable Docker images with tests/builds as gates made deployments easier to reason about. Finally, I reinforced the value of small, well-documented systems with secure defaults and automation.',
            diagramsWireframes: '/pixel-forge-models.svg',
            screenshotsGifs: '/Pixel-Forge-App.jpeg'
        },
        {
            id: 'color-critters',
            name: 'Color-Critters (Kids Mini Game)',
            repoUrl: "https://github.com/luisflores09/Color-Critters",
            deployedUrl: "http://color-critters.s3-website.us-east-2.amazonaws.com/",
            recordingUrl: undefined,
            includeContribution: true,
            purposeGoals:
                'I built Color-Critters as a simple, kid-friendly, touch-first mini game where players learn animal names through repetition, visual cues (emoji + color), and immediate sound/voice feedback. The goal was a fast, rewarding loop (tap → feedback → score) that works well on mobile browsers, including around common audio restrictions.',
            features: [
                'Kids Games Hub main menu with a playable Color-Critters card and “coming soon” placeholders for future games.',
                'Core game loop: critters spawn around the screen, the prompt updates (“Tap the ___s!”), and taps animate, score, and remove critters.',
                'Reactive state management with RxJS (GameState published via BehaviorSubject/Observable) so UI stays in sync with gameplay.',
                'Audio + speech feedback: Web Audio sound effects and Speech Synthesis voice prompts, plus a simple sound on/off toggle.',
                'Milestone celebration mode (temporary overlay + fanfare) and pacing rules (target rotation + cleanup to avoid overcrowding).'
            ],
            contribution:
                'Solo development: I designed and built the app end-to-end—UI/UX, routing, standalone component structure, state management, game rules, animations, audio/speech behavior, and a simple build/deploy workflow suitable for static hosting.',
            skills: [
                'Technical: Angular 19 standalone components, Angular Router',
                'Technical: TypeScript domain modeling (Critter, GameState, GameAnimal, GameColor)',
                'Technical: RxJS state patterns (BehaviorSubject/Observable)',
                'Technical: Web Audio API + Speech Synthesis API',
                'Technical: Mobile/touch event handling, component-scoped CSS + animation',
                'Durable: Product thinking for a young audience and tight feedback loops',
                'Durable: Iterative debugging (browser/mobile quirks) and separation of concerns via service-driven logic',
                'Durable: Maintainable structure for adding more games later'
            ],
            skillsEvidence:
                'I modeled the domain explicitly with interfaces and used that model consistently across the service and components. I centralized game rules and state transitions in a GameService so components stay mostly presentational and event-driven. To handle real-world mobile constraints, I enabled audio only after user interaction and exposed a clear sound toggle to keep the experience predictable.',
            takeaways:
                'Building for mobile browsers reinforced that audio/speech reliability depends on user-gesture timing and retry strategies. A small, well-typed model plus a single source of truth for state made the app easy to extend. I also learned to keep docs/spec expectations aligned with implementation as features evolve.',
            diagramsWireframes: '/Color-Critters-models-diagram.svg',
            screenshotsGifs: '/Color-Critters-App.jpeg'
        },
    ];
}

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
                'Solo project: I designed and implemented the full stack end-to-end (database schema + EF Core models/migrations, REST controllers, and Blazor pages/components). I also handled UI ↔ API integration (HTTP calls + config-driven base URLs) and initial Azure deployment connectivity for the API and database.',
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
            repoUrl: undefined,
            deployedUrl: undefined,
            recordingUrl: undefined,
            includeContribution: true,
            purposeGoals: undefined,
            features: undefined,
            contribution: undefined,
            skills: undefined,
            skillsEvidence: undefined,
            takeaways: undefined,
            diagramsWireframes: undefined,
            screenshotsGifs: undefined
        },
        {
            id: 'front-end-module-project',
            name: 'EchoPlay (Front End Module Project)',
            repoUrl: undefined,
            deployedUrl: undefined,
            recordingUrl: undefined,
            includeContribution: true,
            purposeGoals: undefined,
            features: undefined,
            contribution: undefined,
            skills: undefined,
            skillsEvidence: undefined,
            takeaways: undefined,
            diagramsWireframes: undefined,
            screenshotsGifs: undefined
        },
        {
            id: 'deployment-module-project',
            name: 'Pixel Forge (Deployment Module Project)',
            repoUrl: undefined,
            deployedUrl: undefined,
            recordingUrl: undefined,
            includeContribution: true,
            purposeGoals: undefined,
            features: undefined,
            contribution: undefined,
            skills: undefined,
            skillsEvidence: undefined,
            takeaways: undefined,
            diagramsWireframes: undefined,
            screenshotsGifs: undefined
        }
    ];
}

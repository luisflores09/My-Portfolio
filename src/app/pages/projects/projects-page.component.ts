import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

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
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './projects-page.component.html',
    styleUrl: './projects-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPageComponent {
    projects: Project[] = [
        {
            id: 'inventory-application',
            name: 'Inventory Application',
            repoUrl: "https://github.com/Runtime-Terror123/InventoryApp",
            deployedUrl: "https://inventoryapp-r8aa.onrender.com/",
            recordingUrl: undefined,
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
            name: 'Final Bootcamp Project',
            repoUrl: undefined,
            deployedUrl: undefined,
            recordingUrl: undefined,
            includeContribution: false,
            purposeGoals: undefined,
            features: undefined,
            skills: undefined,
            skillsEvidence: undefined,
            takeaways: undefined,
            diagramsWireframes: undefined,
            screenshotsGifs: undefined
        },
        {
            id: 'back-end-module-project',
            name: 'Back End Module Project',
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
            name: 'Front End Module Project',
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
            name: 'Deployment Module Project',
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

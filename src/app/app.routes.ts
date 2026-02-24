import { Routes } from '@angular/router';

import { AboutPageComponent } from './pages/about/about-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { ExperiencePageComponent } from './pages/experience/experience-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { ProjectsPageComponent } from './pages/projects/projects-page.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomePageComponent,
		title: 'Home'
	},
	{
		path: 'about',
		component: AboutPageComponent,
		title: 'About'
	},
	{
		path: 'experience',
		component: ExperiencePageComponent,
		title: 'Experience & Skills'
	},
	{
		path: 'projects',
		component: ProjectsPageComponent,
		title: 'Projects'
	},
	{
		path: 'contact',
		component: ContactPageComponent,
		title: 'Contact'
	},
	{
		path: '**',
		redirectTo: ''
	}
];

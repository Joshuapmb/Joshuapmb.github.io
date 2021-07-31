import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import different page components for routing
import { AboutMePageComponent } from './components/about-me-page/about-me-page.component';
import { CvPageComponent } from './components/cv-page/cv-page.component';
import { MyProjectsPageComponent } from './components/my-projects-page/my-projects-page.component';
import { ContactDetailsPageComponent } from './components/contact-details-page/contact-details-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/aboutMe', pathMatch: 'full' },
  { path: 'aboutMe', component: AboutMePageComponent },
  { path: 'CV', component: CvPageComponent },
  { path: 'myProjects', component: MyProjectsPageComponent },
  { path: 'contactDetails', component: ContactDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

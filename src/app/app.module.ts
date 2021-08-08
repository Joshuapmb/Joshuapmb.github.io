// imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

// declarations
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMePageComponent } from './components/about-me-page/about-me-page.component';
import { CvPageComponent } from './components/cv-page/cv-page.component';
import { MyProjectsPageComponent } from './components/my-projects-page/my-projects-page.component';
import { ContactDetailsPageComponent } from './components/contact-details-page/contact-details-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMePageComponent,
    CvPageComponent,
    MyProjectsPageComponent,
    ContactDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

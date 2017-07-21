import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './components/app-component/app.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { BioComponent } from './components/bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryPageComponent,
    FilterComponent,
    ProfilePageComponent,
    ProjectPageComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
   // RouterModule ///<<<<<<========== kinda breaks things
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

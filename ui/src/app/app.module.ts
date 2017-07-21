import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './components/app-component/app.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ProjectPageComponent } from './components/project-profile/project-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryPageComponent,
    ProjectPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   // RouterModule ///<<<<<<========== kinda breaks things
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

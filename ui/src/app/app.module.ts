import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app-component/app.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryPageComponent
  ],
  imports: [
    BrowserModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

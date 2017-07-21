import { NgModule }             from '@angular/core';
import { RouterModule, Routes} from '@angular/router'; 

import { AppComponent } from './components/app-component/app.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component'
import { ProfilePageComponent } from './components/profile-page/profile-page.component'
import { ProjectPageComponent } from './components/project-page/project-page.component'

const routes: Routes = [
	{
    path: 'gallery', 
    component: GalleryPageComponent,
    pathMatch: 'full'
  },
	{
    path: 'home', component: AppComponent,
    pathMatch: 'full'
  }, 
  {
    path: 'profile', component: ProfilePageComponent,
    pathMatch: 'full'
  }, 
  {
    path: 'project', component: ProjectPageComponent,
    pathMatch: 'full'
  },
	{
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
	}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
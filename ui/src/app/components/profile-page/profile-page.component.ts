import { Component, OnInit } from '@angular/core';
import { BioComponent } from '../bio/bio.component';

import { Bio } from '../bio/bio';


@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

	title =  "Beyonce";
	tags = ["Web Dev", "Frontend Dev", "Angular", "SpringBoot"];
	blurb = "I am a frontend developer with UX/UI experience";


  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';

import { Bio } from './bio';

@Component({
  selector: 'bio-component',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  constructor() { }

	title =  "Beyonce";
	tags = ["Web Dev", "Frontend Dev", "Angular", "SpringBoot"];
	blurb = "I am a frontend developer with UX/UI experience";

  // title ="Xena";
  // tags: String[];
  // blurb: String;


  ngOnInit() {

  }

}

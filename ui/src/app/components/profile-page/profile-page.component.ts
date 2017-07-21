import { Component, OnInit } from '@angular/core';



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

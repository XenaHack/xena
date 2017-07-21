import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {

  constructor() { }

	title =  "Beyonce";
	age = "19";
	tags = ["Web Dev", "Frontend Dev", "Angular", "SpringBoot"];
	blurb = "I am a frontend developer specialized in AngularJS 2 with UX/UI experience";
	posts = [
		{
			title: "Reflecting on My Summer Internship",
			time: "2017/07/18",
			post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur, dolor sed cursus bibendum, justo lorem ornare sapien, et rhoncus lorem nibh a elit. Nullam malesuada augue fermentum justo finibus, vel interdum mauris finibus. Vestibulum tellus elit, posuere et lectus at, bibendum luctus eros. Suspendisse lobortis justo rutrum, pulvinar enim sed, congue tellus. Nulla rhoncus est quis velit rutrum tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			likes: 23,
			comments: 2
		},{
			title: "Why I Want to Become a Frontend Developer",
			time: "2017/03/10",
			post: "Duis nec aliquam ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ultricies nisi massa, eget tempus nisi eleifend et. Aenean aliquet tempor metus in malesuada. Duis sapien urna, commodo ac placerat in, eleifend eu leo. Aenean rhoncus tortor et posuere porttitor. Aliquam id lacinia sem.",
			likes: 53,
			comments: 0
		},{
			title: "Free Online Sources for High-School-Level Developers",
			time: "2016/03/16",
			post: "Vestibulum sodales blandit purus rutrum sagittis. Aenean eget nunc accumsan, mattis metus vitae, posuere leo. Donec rhoncus dolor sem, nec bibendum neque dapibus pretium.",
			likes: 2,
			comments: 4
		}
	]

  ngOnInit() {
  }

}

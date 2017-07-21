import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.css']
})

export class ProjectPageComponent implements OnInit {

	routeID: string;

	constructor(
		//private router: Router
		) { }

	ngOnInit() {
  }

}

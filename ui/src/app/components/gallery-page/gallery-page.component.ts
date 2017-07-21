import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { Bio } from '../bio/bio';

import { BioComponent }  from '../bio/bio.component'


@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})

export class GalleryPageComponent implements OnInit {

	routeID: string;

	constructor(
		//private router: Router
		) { }

	ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

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
	
	onChildNotify(filters):void{
		// if (message === 'save rule clicked'){
			for (let i = 0; i<filters.length; i++){
				console.log(filters[i]);
			}
		// }

	}

}

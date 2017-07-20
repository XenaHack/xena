import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

	showFilter: boolean = true;

  constructor(
  	public element: ElementRef) {
    this.element.nativeElement // <- your direct element reference 
	}

  ngOnInit() {
  	// var el = this.element.nativeElement;
    // console.log(el);
  }

  expandFilter() {
    this.showFilter = !this.showFilter;

  }

}

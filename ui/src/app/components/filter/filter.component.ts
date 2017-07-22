import { Component, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    @Output() notify: EventEmitter<string> = new EventEmitter();

	showFilter: boolean = false;

  constructor(
  	public element: ElementRef) {
    this.element.nativeElement // <- your direct element reference 
	}

  ngOnInit() {
  	var el = this.element.nativeElement;
    // console.log(el);
  }

  expandFilter() {
    this.showFilter = !this.showFilter;

  }

    search() {
    var filters = "";
    filters = filters + "whoa";
    filters = filters + "yay";

    this.notify.emit(filters);
  }

}

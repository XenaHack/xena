import { Component, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() notify: EventEmitter<any> = new EventEmitter();

  showFilter: boolean = false;
  middleSchool = false;
  highSchool = false;
  earlyProfessional = false;
  professional = false;
  angular = false;
  angularjs = false;
  react = false;
  java = false;
  springboot = false;
  mongodb = false;
  elasticSearch = false;
  node = false;
  expressJS = false;
  docker = false;

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
    var filters = [];
    if (this.middleSchool == true) {
      filters.push("middleSchool");
    }
    if (this.highSchool == true) {
      filters.push("highSchool");
    }
    if (this.earlyProfessional == true) {
      filters.push(this.earlyProfessional);
    }
    if (this.professional == true) {
      filters.push("professional");
    }
    if (this.angular == true) {
      filters.push("angular");
    }
    if (this.angularjs == true) {
      filters.push("angularjs");
    }
    if (this.react == true) {
      filters.push("react");
    }
    if (this.java == true) {
      filters.push("java");
    }
    if (this.springboot == true) {
      filters.push("springboot");
    }
    if (this.mongodb == true) {
      filters.push("mongodb");
    }
    if (this.elasticSearch == true) {
      filters.push("elasticSearch");
    }
    if (this.node == true) {
      filters.push("node");
    }
    if (this.expressJS == true) {
      filters.push("expressJS");
    }
    if (this.docker == true) {
      filters.push("docker");
    }


    // console.log("I am middle school: " + this.middleSchool);

    this.notify.emit(filters);
  }

}

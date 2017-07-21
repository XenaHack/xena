import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {


	private feedUrl = 'http://localhost:3001/api'; //<- update url

	private headers = new Headers({'Content-Type': 'application/json'});

  constructor() { }

}

import { Http, Headers, RequestOptions, Jsonp, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class FeedService {

	private projectUrl = 'http://192.168.99.100:8080/feed'; //<- update url


	private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

}

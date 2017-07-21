import { Http, Headers, RequestOptions, Jsonp, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {


	private projectUrl = 'http://192.168.99.100:8080/project'; //<- update url


	private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    // Create a Project
    createProject (jsonBody) {
        return this.http.post(this.projectUrl + '/create', jsonBody)
          .map((res: Response) => res.json());

    }

    // Retrieve Projects based on given tags
    getProjectByTags (tagsArray) {
        return this.http.get(this.projectUrl + '/get/tags/' + tagsArray, {})
          .map((res: Response) => res.json());

    }

    getProjectById(id){
        return this.http.get(this.projectUrl + '/get' + id, {})
          .map((res: Response) => res.json());
    }



}

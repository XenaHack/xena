import { Http, Headers, RequestOptions, Jsonp, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {


	private postUrl = 'http://192.168.99.100:8080/post'; //<- update url


	private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    // Create a Project
    createPost (jsonBody) {
        return this.http.post(this.postUrl + '/create', jsonBody)
          .map((res: Response) => res.json());

    }

    // Retrieve Projects based on given tags
    getPostByTags (tagsArray) {
        return this.http.get(this.postUrl + '/get/tags/' + tagsArray, {})
          .map((res: Response) => res.json());

    }

    getPostById(id){
        return this.http.get(this.postUrl + '/get' + id, {})
          .map((res: Response) => res.json());
    }



}

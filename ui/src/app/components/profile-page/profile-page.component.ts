import { Component, OnInit } from '@angular/core';
import { BioComponent } from '../bio/bio.component';
import {PostService} from '../../services/post.service'

import { Bio } from '../bio/bio';


@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers: [PostService]

})
export class ProfilePageComponent implements OnInit {

  constructor(
    private postService : PostService

  ) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe(
      response => {
        console.log(response);
      }
    )
  }

}

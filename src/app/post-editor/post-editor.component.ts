import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {

  posts: any[];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.posts = this.postService.posts;
  }

}

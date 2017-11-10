import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostService} from '../post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  id: number;
  postForm: FormGroup;
  post: any;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.post = this.postService.posts[this.id];

    this.postForm = new FormGroup({
       title: new FormControl(this.post.title),
       img: new FormControl(this.post.img),
       text: new FormControl(this.post.text)
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.postService.onEdit(this.id, this.postForm.value);
    this.router.navigate(['']);
  }

}

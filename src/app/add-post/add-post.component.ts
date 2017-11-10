import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {PostService} from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

    postForm: FormGroup;

  constructor(private postService: PostService, private router: Router) {
      this.postForm = new FormGroup({
          title: new FormControl(),
          img: new FormControl(),
          text: new FormControl()
      });
  }

  ngOnInit() {
  }

    onSubmit() {
      this.postService.onAdd(this.postForm.value);
      this.router.navigate(['']);
    }

}

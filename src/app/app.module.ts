import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import {PostService} from './post.service';
import { HomePageComponent } from './home-page/home-page.component';
import { PostEditorComponent } from './post-editor/post-editor.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'editor', component: PostEditorComponent},
    {path: 'add', component: AddPostComponent},
    {path: 'edit/:id', component: EditPostComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    EditPostComponent,
    HomePageComponent,
    PostEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

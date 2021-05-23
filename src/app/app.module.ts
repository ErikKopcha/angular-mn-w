import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { TrainingComponent } from "./training/training.component";
import { PostMainComponent } from "./post-main/post-main.component";
import { PostComponent } from "./post/post.component";
import { PostFormComponent } from "./post-form/post-form.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    WelcomeComponent,
    FetchDataComponent,
    TrainingComponent,
    PostMainComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: 'training', component: TrainingComponent },
      { path: 'post-main', component: PostMainComponent },
      { path: 'fetch-data', component: FetchDataComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

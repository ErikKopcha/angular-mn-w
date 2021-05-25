import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

// calc .....
import { CalculatorComponent } from "./calculator/calculator.component";
import { Calc } from "./store/calc";
import { ButtonComponent } from "./calculator/button/button.component";

import { AppComponent } from './app.component';
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { TrainingComponent } from "./training/training.component";
import { PostMainComponent } from "./posts/post-main/post-main.component";
import { PostComponent } from "./posts/post/post.component";
import { PostFormComponent } from "./posts/post-form/post-form.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    WelcomeComponent,
    FetchDataComponent,
    TrainingComponent,
    PostMainComponent,
    PostComponent,
    PostFormComponent,
    CalculatorComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    Calc,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'training', component: TrainingComponent },
      { path: 'post-main', component: PostMainComponent },
      { path: 'fetch-data', component: FetchDataComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

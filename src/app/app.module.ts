import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {NavMenuComponent} from "./nav-menu/nav-menu.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {TrainingComponent} from "./training/training.component";
import {PostMainComponent} from "./posts/post-main/post-main.component";
import {PostComponent} from "./posts/post/post.component";
import {PostFormComponent} from "./posts/post-form/post-form.component";
import {StyleDirectives} from "./directives/style.directives";
import {IfnotDirective} from "./directives/ifnot.directive";
import {MultByPipe} from "./pipes/mult-by.pipe";
import {FilterPipe} from "./pipes/filter.pipe";
import {AppCounterService} from "./services/app-counter.service";
import {BaseServiceComponent} from "./test-services/base-service.component";
import {FormValidationComponent} from "./form-validation/form-validation.component";
import {SwitchComponent} from "./switch/switch.component";
import {HttpClientComponent} from "./http-client/http-client.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    WelcomeComponent,
    TrainingComponent,
    PostMainComponent,
    PostComponent,
    PostFormComponent,
    StyleDirectives,
    IfnotDirective,
    MultByPipe,
    FilterPipe,
    BaseServiceComponent,
    FormValidationComponent,
    SwitchComponent,
    HttpClientComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: 'training', component: TrainingComponent },
      { path: 'post-main', component: PostMainComponent },
      { path: 'form-validation', component: FormValidationComponent },
      { path: 'http-client', component: HttpClientComponent },
    ])
  ],
  providers: [AppCounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

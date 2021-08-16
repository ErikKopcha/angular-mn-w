import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {TrainingComponent} from "./training/training.component";
import {PostMainComponent} from "./posts/post-main/post-main.component";
import {FormValidationComponent} from "./form-validation/form-validation.component";
import {HttpClientComponent} from "./http-client/http-client.component";
import {PostDetailComponent} from "./posts/post-detail/post-detail.component";
import {AboutComponent} from "./about/about.component";
import {AboutSubpageComponent} from "./about-subpage/about-subpage.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'training', component: TrainingComponent },
  { path: 'post-main', component: PostMainComponent },
  { path: 'post-main/:id', component: PostDetailComponent },
  { path: 'form-validation', component: FormValidationComponent },
  { path: 'http-client', component: HttpClientComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [{
      path: 'subpage',
      component: AboutSubpageComponent
    }]
  },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouterModule { }

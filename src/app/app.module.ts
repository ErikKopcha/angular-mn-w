import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { TrainingComponent } from "./training/training.component";
import { PostMainComponent } from "./posts/post-main/post-main.component";
import { PostComponent } from "./posts/post/post.component";
import { PostFormComponent } from "./posts/post-form/post-form.component";
import { StyleDirectives } from "./directives/style.directives";
import { IfnotDirective } from "./directives/ifnot.directive";
import { MultByPipe } from "./pipes/mult-by.pipe";
import { FilterPipe } from "./pipes/filter.pipe";
import { AppCounterService } from "./services/app-counter.service";
import { BaseServiceComponent } from "./test-services/base-service.component";
import { FormValidationComponent } from "./form-validation/form-validation.component";
import { SwitchComponent } from "./switch/switch.component";
import { HttpClientComponent } from "./http-client/http-client.component";
import { AuthInterseptop } from "./interseptor/auth.interseptop";
import { AppRouterModule } from "./app-router.module";
import { PostDetailComponent } from "./posts/post-detail/post-detail.component";
import { AboutComponent } from "./about/about.component";
import { AboutSubpageComponent } from "./about-subpage/about-subpage.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { NeedLoginComponent } from "./need-login/need-login.component";
import { ModalComponent } from "./modal/modal.component";
import { RefDirective } from './ref.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CounterComponent } from './counter/counter.component';
import { PostsComponentTest } from './integration-tests/posts/posts.component';
import { CounterComponentTest } from './integration-tests/counter/counter.component';
import { RoutingComponent } from './routing/routing.component';
import { AnimationComponent } from './animation/animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgAnimationComponent } from './ng-animation/ng-animation.component';

const INTERSEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterseptop,
  multi: true
};

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
    PostDetailComponent,
    AboutComponent,
    AboutSubpageComponent,
    ErrorPageComponent,
    NeedLoginComponent,
    ModalComponent,
    RefDirective,
    CounterComponent,
    CounterComponentTest,
    PostsComponentTest,
    RoutingComponent,
    AnimationComponent,
    NgAnimationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [AppCounterService, INTERSEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }

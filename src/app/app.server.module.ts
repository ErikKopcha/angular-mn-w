import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import {Calc} from "./store/calc";

@NgModule({
    imports: [AppModule, ServerModule, ModuleMapLoaderModule, Calc],
    bootstrap: [AppComponent]
})
export class AppServerModule { }

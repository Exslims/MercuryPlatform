import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {InformationService, NgSystemInformationService} from "../ng-system-information.service";
import {EnvironmentService, NgSystemEnvironmentService} from "../ng-system-environment.service";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        NoopAnimationsModule],
    declarations: [
        AppComponent
    ],
    providers: [
        {provide: InformationService, useClass: NgSystemInformationService},
        {provide: EnvironmentService, useClass: NgSystemEnvironmentService},
        // PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

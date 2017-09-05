import {NgModule} from "@angular/core";
import {AppComponent} from "./mercury/experimental/app.component";
import {AppModule} from "./mercury/experimental/app.module";

@NgModule({
    imports: [
        AppModule
    ],
    bootstrap: [AppComponent]
})
export class NgMainModule {
}
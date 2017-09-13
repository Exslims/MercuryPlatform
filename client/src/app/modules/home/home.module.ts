import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {SharedModule} from "../shared/shared.module";
import {HeaderComponent} from "./footer/header.component";
import {DashboardModule} from "./dashboard/dashboard.module";
import {ClrDropdownModule, ClrIconModule} from "clarity-angular";

@NgModule({
    imports: [
        SharedModule,
        DashboardModule,
        ClrIconModule,
        ClrDropdownModule
    ],
    exports: [
        HomeComponent,
    ],
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
})
export class HomeModule {
}
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {SharedModule} from "../shared/shared.module";
import {StatusComponent} from "./status/status.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeaderComponent} from "./footer/header.component";
import {ClrDropdownModule, ClrIconModule} from "clarity-angular";
import {OnlineCardComponent} from "./dashboard/inner/online-card.component";
import {StatusCardComponent} from "./dashboard/inner/status-card.component";

@NgModule({
    imports: [
        SharedModule,
        ClrIconModule,
        ClrDropdownModule
    ],
    exports: [
        HomeComponent,
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        StatusComponent,
        DashboardComponent,
        OnlineCardComponent,
        StatusCardComponent
    ],
})
export class HomeModule {
}
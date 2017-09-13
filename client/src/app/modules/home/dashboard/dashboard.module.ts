import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {OnlineCardComponent} from "./inner/online-card.component";
import {StatusCardComponent} from "./inner/status-card.component";
import {OperationsCardComponent} from "./inner/operations-card.component";
import {ClrDropdownModule, ClrIconModule} from "clarity-angular";
@NgModule({
    imports: [
        ClrIconModule,
        ClrDropdownModule
    ],
    exports: [
        DashboardComponent
    ],
    declarations: [
        DashboardComponent,
        OnlineCardComponent,
        StatusCardComponent,
        OperationsCardComponent
    ]
})
export class DashboardModule {
}

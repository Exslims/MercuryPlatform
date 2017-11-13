import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {HomeModule} from "./home/home.module";

const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {
        path: "home",
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        HomeModule,
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

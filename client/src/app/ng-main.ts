import "./ng-polyfills";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {bootloader} from "@angularclass/hmr";
import {AppModule} from "./app.module";

declare const Refcrect: any;

if (process.env.STATIC) {
    //console.log("******************You are in Dev mode******************");
    platformBrowserDynamic().bootstrapModule(AppModule).then((): any => {
    });
} else if (process.env.HMR) {
    //console.log("******************You are in HMR mode******************");
    bootloader(main);
}

export function main() {
    return platformBrowserDynamic()
        .bootstrapModule(AppModule)
}

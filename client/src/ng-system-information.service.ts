import {Injectable} from "@angular/core";
import {environment} from "./environments/environment";

export abstract class InformationService {
    information: Promise<any>;
}

//TODO: Move to app folder, rename (NgSystem prefix looks excess)

// TODO: Maybe we need to store info at environment variable, not in config.json.
// TODO: see https://github.com/angular/angular-cli/wiki/stories-application-environments
@Injectable()
export class NgSystemInformationService implements InformationService {

    configJson: Promise<any>;

    constructor() {
        const url = environment.production ? "assets/tnv.config.prod.json" : "assets/tnv.config.json";
        const fetchConfig: RequestInit = {
            credentials: "same-origin"
        };
        // TODO: Use angular http, when mock-backend will be removed.
        // Send request in constructor and save promise
        this.configJson = fetch(url, fetchConfig)
            .then(response => response.json()) // TODO: process errors in user-friendly way
            .then(data => environment.production ? this.processUrls(data) : data)
    }

    get information(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            return this.configJson
                .then(data => resolve(data))
                .catch(r => reject(r));
        });
    }

    // TODO: This is temporary workaround.
    private processUrls(data): any {
        if (!data.urls) {
            return data;
        }

        let rootPath: string = document.location.href;
        if (document.location.href.indexOf("#") !== -1) {
            rootPath = document.location.href.substring(0, document.location.href.indexOf("#"))
        }

        Object.keys(data.urls).forEach(k => {
            data.urls[k] = rootPath + data.urls[k];
        });

        return data;
    }
}

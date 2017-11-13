import {Injectable} from "@angular/core";
import {environment} from "./environments/environment";

export abstract class EnvironmentService {
    isProduction: boolean;
}

//TODO: Move to app folder
@Injectable()
export class NgSystemEnvironmentService extends EnvironmentService {
    get isProduction(): boolean {
        return environment.production;
    }
}

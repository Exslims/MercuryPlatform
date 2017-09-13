import {Component, HostBinding, OnInit} from "@angular/core";

@Component({
    selector: "ux-header",
    templateUrl: "header.component.html"
})
export class HeaderComponent implements OnInit {
    @HostBinding('class') classes = 'header header-6';

    ngOnInit(): void {

    }
}
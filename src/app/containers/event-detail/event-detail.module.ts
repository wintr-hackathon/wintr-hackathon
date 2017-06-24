import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {EventDetailComponent} from "./event-detail.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    declarations: [EventDetailComponent],
    imports     : [
        BrowserModule,
        FormsModule,
        NgbModule
    ],
})

export class EventDetailModule {}

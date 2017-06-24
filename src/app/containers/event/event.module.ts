import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {EventComponent} from "./event.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    declarations: [EventComponent],
    imports     : [
        BrowserModule,
        FormsModule,
        NgbModule
    ],
})

export class EventModule {}

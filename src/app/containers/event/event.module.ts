import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {EventComponent} from "./event.component";


@NgModule({
    declarations: [EventComponent],
    imports     : [
        BrowserModule,
        FormsModule
    ],
})

export class EventModule {}

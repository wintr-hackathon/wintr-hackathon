import {NgModule, ApplicationRef} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {EventDetailComponent} from "./event-detail.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';


@NgModule({
    declarations: [EventDetailComponent],
    imports     : [
        BrowserModule,
        FormsModule,
        CommonModule,
        NgbModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCqW5Pdd5I-W7NZPLAbTex8wz8Wo7Km0Yg'
        })
    ],
    providers: [],
    bootstrap: [ EventDetailComponent ]
})

export class EventDetailModule {}

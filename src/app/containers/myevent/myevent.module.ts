import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MyEventComponent} from "./myevent.component";


@NgModule({
    declarations: [MyEventComponent],
    imports     : [
        BrowserModule,
        FormsModule,
        NgbModule
    ],
})

export class MyEventModule {}

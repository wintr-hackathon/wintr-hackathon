import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {BasicComponent} from "./basic.component";
import {BlankComponent} from "./blank.component";

@NgModule({
    declarations: [BlankComponent, BasicComponent],
    imports     : [BrowserModule, RouterModule],
    exports     : [BlankComponent, BasicComponent]
})

export class LayoutsModule {}

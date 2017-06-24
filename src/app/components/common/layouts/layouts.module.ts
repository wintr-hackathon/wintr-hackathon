import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {BasicComponent} from "./basic.component";
import {BlankComponent} from "./blank.component";
import {TopnavbarModule} from "../topnavbar/topnavbar.module";
import {NavigationModule} from "../navigation/navigation.module";

@NgModule({
    declarations: [BlankComponent, BasicComponent],
    imports     : [BrowserModule, RouterModule, NavigationModule, TopnavbarModule],
    exports     : [BlankComponent, BasicComponent]
})

export class LayoutsModule {}

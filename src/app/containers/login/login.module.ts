import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login.component";
import {FormsModule} from '@angular/forms';
import {AngularFireAuth} from "angularfire2/auth";


@NgModule({
    declarations: [LoginComponent],
    imports     : [
        BrowserModule,
        FormsModule
    ],
})

export class LoginModule {}

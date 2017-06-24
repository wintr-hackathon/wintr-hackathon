import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Global} from "../../components/service/global";

import { AppComponent } from '../../app.component';

@Component({
    selector: 'login',
    templateUrl: 'login.template.html',
    styleUrls: ['login.component.css'],
    providers: []
})
export class LoginComponent {

    constructor(
        private router: Router,
        private global: Global,
        private appComponent: AppComponent
    ) {

    }

    facebookLogin() {
        this.global.isLoggedIn = true;
        this.appComponent.login();
        console.log('facebookLogin');
        // this.router.navigate(['/event']);
    }
}

//

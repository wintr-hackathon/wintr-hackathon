import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Global} from "../../components/service/global";

@Component({
    selector: 'login',
    templateUrl: 'login.template.html',
    styleUrls: ['login.component.css'],
    providers: []
})
export class LoginComponent {

    constructor(
        private router: Router,
        private global: Global
    ) {

    }

    facebookLogin() {
        this.global.isLoggedIn = true;
        this.router.navigate(['/event']);
    }
}

//


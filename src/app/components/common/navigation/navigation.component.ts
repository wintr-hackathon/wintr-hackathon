import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Global} from "../../service/global";
import {AngularFireAuth} from "angularfire2/auth";

declare var jQuery:any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html',
    styleUrls:['navigation.component.css'],
})

export class NavigationComponent {

    private global: Global;
    public username: string;
    public profileImg: string;

    constructor(private router: Router, private _global: Global,
        private afAuth: AngularFireAuth
    ) {
        this.global = _global;

        if (!this.global.isLoggedIn) {
            this.router.navigate(['login/']);
            return;
        }

        this.username = this.global.username;
        this.profileImg = this.global.profileImg;
    }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }

    openEvent() {
        this.router.navigate(['/event']);
        jQuery("#wrapper").toggleClass("toggled");
    }

    openMyEvent() {
        this.router.navigate(['/myevent']);
        jQuery("#wrapper").toggleClass("toggled");
    }

    logout() {
        this.afAuth.auth.signOut();
        this.global.isLoggedIn = false;
        this.global.username = '';
        this.global.profileImg = '';
        this.global.uid = '';
        this.router.navigate(['/login']);
        jQuery("#wrapper").toggleClass("toggled");
    }
}
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Global} from "../../components/service/global";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'login',
    templateUrl: 'login.template.html',
    styleUrls: ['login.component.css'],
    providers: []
})
export class LoginComponent {

    user: Observable<firebase.User>;
    subUser: any;

    constructor(
        private router: Router,
        private global: Global,
        private afAuth: AngularFireAuth
    ) {
        this.user = afAuth.authState;

        // this.global.isLoggedIn = true;
        // this.global.username = "Ratchasak Ranron";
        // this.global.profileImg = "";
        // this.global.uid = "Udf6JPOAeKPpmzwlk0DZK0DCW9V2";
        // this.router.navigate(['/event']);
        this.subUser = this.user.subscribe(
            user => {
                if (user === null) {
                    return;
                }
                console.log(user);
                const providerData = user.providerData[0];
                this.global.isLoggedIn = true;
                this.global.username = providerData.displayName;
                this.global.profileImg = providerData.photoURL;
                this.global.uid = user.uid;
                this.router.navigate(['/event']);
            },
            error => console.warn('login error: ' + error),
            () => console.log('complete')
        );
    }

    facebookLogin() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    public ngOnDestroy(): void {
        this.subUser.unsubscribe();
    }
}

//


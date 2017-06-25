import { Injectable } from '@angular/core';
import { CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot } from '@angular/router';
import { Global } from './global';
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private global: Global,
                private afAuth: AngularFireAuth) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.global.isLoggedIn) {
            console.log('uid: ' + this.global.uid);
            if (this.global.uid === '' && this.afAuth.auth.currentUser) {
                const that = this;
                this.afAuth.auth.currentUser.getIdToken(true).then((result) => {
                    console.log(result);
                    const subAuthState = that.afAuth.authState.subscribe(
                        user => {
                            if (user === null) {
                                return;
                            }
                            console.log(user);
                            const providerData = user.providerData[0];
                            that.global.isLoggedIn = true;
                            that.global.username = providerData.displayName;
                            that.global.profileImg = providerData.photoURL;
                            that.global.uid = user.uid;
                            subAuthState.unsubscribe();
                        },
                        error => console.warn('login error: ' + error),
                        () => console.log('complete')
                    );
                });
            }
            console.log('ATUH GUARD SAYD THEY ARE ALREADY LOGGED IN!');
            return true;
        }else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
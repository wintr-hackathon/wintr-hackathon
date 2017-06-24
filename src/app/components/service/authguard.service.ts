import { Injectable } from '@angular/core';
import { CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot } from '@angular/router';
import { Global } from './global';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private global: Global) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.global.isLoggedIn) {
            console.log('ATUH GUARD SAYD THEY ARE ALREADY LOGGED IN!');
            return true;
        }else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
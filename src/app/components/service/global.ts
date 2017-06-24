import { Injectable } from '@angular/core';

Injectable()
export class Global {
    private _isLoggedIn = false;
    public _token = null;

    get isLoggedIn():boolean {
        return this._isLoggedIn;
    }
    set isLoggedIn(isLoggedIn:boolean) {
        localStorage.setItem('isLoggedIn', (isLoggedIn) ? 'true': 'false');
        this._isLoggedIn = isLoggedIn;
    }

    constructor() {
        this._isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    }
}
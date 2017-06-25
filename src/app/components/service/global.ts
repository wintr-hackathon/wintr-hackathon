import { Injectable } from '@angular/core';

Injectable()
export class Global {
    private _isLoggedIn = false;
    public _token = null;
    private _uid = '';
    private _username = '';
    private _profileImg = '';

    get isLoggedIn():boolean {
        return this._isLoggedIn;
    }
    set isLoggedIn(isLoggedIn:boolean) {
        localStorage.setItem('isLoggedIn', (isLoggedIn) ? 'true': 'false');
        this._isLoggedIn = isLoggedIn;
    }

    get uid():string {
        return this._uid;
    }
    set uid(uid:string) {
        localStorage.setItem('uid', uid);
        this._uid = uid;
    }

    get username():string {
        return this._username;
    }
    set username(username:string) {
        localStorage.setItem('username', username);
        this._username = username;
    }

    get profileImg():string {
        return this._profileImg;
    }
    set profileImg(profileImg:string) {
        localStorage.setItem('profileImg', profileImg);
        this._profileImg = profileImg;
    }

    constructor() {
        this._isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        this._username = localStorage.getItem('username');
        this._profileImg = localStorage.getItem('profileImg');
        this._uid = localStorage.getItem('uid');
    }
}
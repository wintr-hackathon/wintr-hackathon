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
        this.global.username = 'Ratchasak Ranron';
        this.global.profileImg = 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-1/p74x74/18301548_10210856620388711_8238501501626598005_n.jpg?oh=3ffd65a217bfdf3878d2a71b185a105e&oe=5A1172DA';
        this.router.navigate(['/event']);
    }
}

//


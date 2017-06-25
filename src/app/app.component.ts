import {Component, ViewEncapsulation} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import {Global} from "./components/service/global";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ],
})
export class AppComponent {
  title = 'FundRun';

  constructor(private afAuth: AngularFireAuth, private global: Global, private router: Router) {
    if (this.afAuth.auth.currentUser) {
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
  }
}

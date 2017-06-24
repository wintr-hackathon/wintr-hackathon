import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Global} from "../../components/service/global";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {AfoListObservable, AfoObjectObservable, AngularFireOfflineDatabase} from "angularfire2-offline";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'myevent',
    templateUrl: 'myevent.template.html',
    styleUrls: ['myevent.component.css'],
    providers: []
})
export class MyEventComponent {

    myEvents: Observable<any[]>;
    subMyEvents: any;
    myRunCount = {};

    constructor(private router: Router,
                private modalService: NgbModal,
                private global: Global,
                private db: AngularFireOfflineDatabase
    ) {
        const that = this;
        this.myEvents = this.db.list('/users/' + global.uid + '/my_events')
            .map((eventKeys) =>
                eventKeys.map( (event) => {
                    that.myRunCount[event.event_id] = event.my_run_count;
                    return that.db.object(`/events/${event.event_id}`)
                })
            )
            .flatMap((res) => {
                console.log(res);
                return Observable.combineLatest(res);
            });
    }

    openEventDetail(id) {
        this.router.navigate(['/event/' + id]);
    }

    OnDestroy() {
        this.subMyEvents.unsubscribe();
    }
}

//


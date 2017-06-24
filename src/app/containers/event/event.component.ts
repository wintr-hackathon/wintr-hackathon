import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Global} from "../../components/service/global";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Component({
    selector: 'event',
    templateUrl: 'event.template.html',
    styleUrls: ['event.component.css'],
    providers: []
})
export class EventComponent {

    events: FirebaseListObservable<any[]>;

    constructor(private router: Router,
                private modalService: NgbModal,
                private global: Global,
                db: AngularFireDatabase
    ) {
        this.events = db.list('/events');
    }

    openEventDetail(id) {
        this.router.navigate(['/event/' + id]);
    }
}

//


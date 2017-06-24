import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Global} from "../../components/service/global";

@Component({
    selector: 'event',
    templateUrl: 'event.template.html',
    styleUrls: ['event.component.css'],
    providers: []
})
export class EventComponent {

    constructor(private router: Router,
                private modalService: NgbModal,
                private global: Global
    ) {

    }

    openEventDetail(id) {
        this.router.navigate(['/event/' + id]);
    }
}

//


import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'event',
    templateUrl: 'event.template.html',
    styleUrls: ['event.component.css'],
    providers: []
})
export class EventComponent {

    model = 1;
    
    constructor(private router: Router,
                private modalService: NgbModal) {

    }
}

//


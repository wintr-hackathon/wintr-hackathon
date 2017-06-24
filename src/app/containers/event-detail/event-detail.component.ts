import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Global} from "../../components/service/global";

@Component({
    selector: 'event-detail',
    templateUrl: 'event-detail.template.html',
    styleUrls: ['event-detail.component.css'],
    providers: []
})
export class EventDetailComponent {

    eventId: any;
    
    constructor(private router: Router,
                private modalService: NgbModal,
                private global: Global,
                private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
        let that = this;
        this.route.params.subscribe(params => {
            that.eventId = +params['id'];
        });
    }
    

}

//


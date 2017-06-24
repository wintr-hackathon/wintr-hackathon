import { Component } from '@angular/core';
declare var jQuery:any;
import {Router} from '@angular/router';
import {Global} from "../../service/global";


@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.template.html',
    styleUrls:['topnavbar.component.css'],
    providers: []
})
export class TopnavbarComponent {

    constructor(private router:Router,
                private global: Global
    ){

    }

    toggleNavigation(): void {
        jQuery("#wrapper").toggleClass("toggled");
    }
}

import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Global} from "../../components/service/global";
import { GoogleMapsAPIWrapper, PolylineManager } from "@agm/core";


@Component({
    
    selector: 'event-detail',
    templateUrl: 'event-detail.template.html',
    styleUrls: ['event-detail.component.css'],
    providers: []
})
export class EventDetailComponent {

    eventId: any;

    firstLat: number
    firstLng: number
    tempLat: number
    tempLng: number
    lat: number;
    lng: number;
    pathPoints = [];
    distance: any = 0;
    intv: any;
    
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
        that.firstPosition();
    }

    firstPosition(){
        let that = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showFirstPosition);
        }
        function showFirstPosition(position){
            that.firstLat = that.lat = position.coords.latitude;
            that.firstLng = that.lng = position.coords.longitude;
        }
    }

    startRun(){
        let that = this;

        that.firstPosition();
        
        that.intv = setInterval(() => {
            getThisLocation()
            }, 1000);
        
        function getThisLocation(){
            if (navigator.geolocation) {
                 navigator.geolocation.getCurrentPosition(showPosition);
            }
            //that.distance += 1;
        }
        function showPosition(position) {
            that.tempLat = that.lat;
            that.tempLng = that.lng;
            that.lat = position.coords.latitude;
            that.lng = position.coords.longitude;
            that.distance += getDistanceFromLatLonInKm(that.tempLat, that.tempLng, that.lat, that.lng);

            that.pathPoints.push({lat: that.lat, lng: that.lng});
        }

        function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2-lat1);  // deg2rad below
            var dLon = deg2rad(lon2-lon1); 
            var a = 
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
                Math.sin(dLon/2) * Math.sin(dLon/2)
                ; 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c; // Distance in km
            return d;
        }

        function deg2rad(deg) {
            return deg * (Math.PI/180)
        }
    }

    stopRun(){
        let that = this;
         clearInterval(that.intv);
    }

}

//


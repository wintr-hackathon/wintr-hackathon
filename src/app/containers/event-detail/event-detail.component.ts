import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Global} from "../../components/service/global";
import { GoogleMapsAPIWrapper, PolylineManager } from "@agm/core";
import * as firebase from 'firebase/app';
import {AfoObjectObservable, AngularFireOfflineDatabase} from "angularfire2-offline";
import {FirebaseApp} from "angularfire2";

@Component({
    selector: 'event-detail',
    templateUrl: 'event-detail.template.html',
    styleUrls: ['event-detail.component.css'],
    providers: []
})
export class EventDetailComponent {

    eventId: any;

    firstLat: number;
    firstLng: number;
    lat: number;
    lng: number;
    pathPoints = [];
    distance: any = 0;
    tempDistance: any= 0;
    runIntv: any;
    noRunIntv: any;
    runStat: string;
    time: number = 0;
    hour: number;
    event: AfoObjectObservable<any>;
    myEvent: AfoObjectObservable<any>;
    subMyEvent: any;
    uid = '';
    show = false;
    distanceSlots: any = [];
    distanceMaxSlot: number = 3;
    distanceIndex: number = 0;
    runSpeed: any = 0;
    runPace: any = 0;

    constructor(private router: Router,
                private modalService: NgbModal,
                private global: Global,
                private route: ActivatedRoute,
                private db: AngularFireOfflineDatabase,
                private fb: FirebaseApp
    ) {
        this.uid = global.uid;
    }

    ngOnInit() {
        const that = this;
        this.route.params.subscribe(params => {
            that.eventId = +params['id'];

            // get event detail
            that.event = that.db.object(`/events/${that.eventId}`);
            that.myEvent = that.db.object(`/users/${that.uid}/my_events/${that.eventId}`);
            that.myEvent.update({ event_id: that.eventId });
            that.subMyEvent = that.myEvent.subscribe(
                event => {
                    that.distance = event.my_run_count || 0;
                },
                error => console.warn('login error: ' + error),
                () => console.log('complete')
            );
        });

        that.noRunIntv = setInterval(() => {
            that.getPosition()
            }, 1000);
        that.hour = Math.floor(that.time/60);
        for(var i=0; i < that.distanceMaxSlot; i++){
            that.distanceSlots[i] = 0;
        }
    }

    getPosition(){
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
        that.runStat = "( Running )";
        clearInterval(that.noRunIntv);
        
        that.getPosition();
        that.runIntv = setInterval(() => {
            getRunPosition()
            }, 3000);
        
        function getRunPosition(){
            if (navigator.geolocation) {
                 navigator.geolocation.getCurrentPosition(updatePosition);
            }
            that.time += 1;
            that.hour = Math.floor(that.time/60);
            //if(that.time > 0 ) that.speed = (that.distance*1000)/that.time;
            
            that.runSpeed = 0;
            for(var i=0; i<that.distanceMaxSlot; i++){
                that.runSpeed += that.distanceSlots[i];
            }
            that.runSpeed = ( that.runSpeed * 1000 ) / that.distanceMaxSlot;
            that.runSpeed = ( that.runSpeed * 18 ) / 5;
            console.log(that.runSpeed);

            if(that.runSpeed/60 > 0){
                that.runPace = 1/ (that.runSpeed/60);
            }else{
                that.runPace = 0;
            }

            //Notification
            if(Math.floor(that.distance)-Math.floor(that.tempDistance) > 0){
                try{
                Notification.requestPermission().then(function(result){
                    if (result === 'denied') {
                        console.log('Permission wasn\'t granted. Allow a retry.');
                        return;
                    }else if (result === 'default') {
                        console.log('The permission request was dismissed.');
                        return;
                    }else{
                        var e = new Notification('Your total distance is ' + Math.floor(that.distance) +' km!',{
                            icon : '../../../../assets/notificatio_icon.png'
                        } );
                    }
                });
                }catch(e){
                    console.log(e);
                }
            }

            that.tempDistance = that.distance;
        }

        function updatePosition(position) {
            var tempLat;
            var tempLng;
            let newDistance = getDistanceFromLatLonInKm(that.lat, that.lng, position.coords.latitude, position.coords.longitude);
            // that.distance += getDistanceFromLatLonInKm(tempLat, tempLng, that.lat, that.lng);

            that.pathPoints.push({lat: that.lat, lng: that.lng});

            if(newDistance < 0.01) {
                tempLat = that.lat;
                tempLng = that.lng;
                that.lat = position.coords.latitude;
                that.lng = position.coords.longitude;
                that.distance += newDistance;
                that.distanceSlots[that.distanceIndex] = newDistance;
                that.distanceIndex = ( that.distanceIndex + 1 ) % that.distanceMaxSlot;
                // console.log(tempLng);
                // console.log(tempLat);

                const eventRunCountRef = that.fb.database().ref(`/events/${that.eventId}/run_count`);
                eventRunCountRef.transaction(run_count => (run_count || 0) + newDistance);

                const myRunCountRef = that.fb.database().ref(`/users/${that.uid}/my_events/${that.eventId}/my_run_count`);
                myRunCountRef.transaction(my_run_count => (my_run_count || 0) + newDistance);
            }
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

        //Notification
        try{
        Notification.requestPermission().then(function(result){
            if (result === 'denied') {
                console.log('Permission wasn\'t granted. Allow a retry.');
                return;
            }else if (result === 'default') {
                console.log('The permission request was dismissed.');
                return;
            }else{
                var e = new Notification('You are start running!',{
                    icon : '../../../../assets/notificatio_icon.png'
                });
            }
        });
        }catch(e){
            console.log(e);
        }
    }

    stopRun(){
        let that = this;
        that.runStat = "";
        that.runSpeed = 0;

        clearInterval(that.runIntv);
        that.noRunIntv = setInterval(() => {
            that.getPosition()
        }, 3000);
    }

    ngOnDestroy() {
        clearInterval(this.runIntv);
        clearInterval(this.noRunIntv);
        this.subMyEvent.unsubscribe();
    }
}

//


import {Routes} from "@angular/router";
import {BasicComponent} from "./components/common/layouts/basic.component";
import {LoginComponent} from "./containers/login/login.component";
import {BlankComponent} from "./components/common/layouts/blank.component";
import {EventComponent} from "./containers/event/event.component";
import {EventDetailComponent} from "./containers/event-detail/event-detail.component";
import {AuthGuard} from "./components/service/authguard.service";
import {MyEventComponent} from "./containers/myevent/myevent.component";


export const ROUTES:Routes = [


    // Main redirect
    {path: '', redirectTo: 'event', pathMatch: 'full'},

    // App views
    {
        path: '', component: BasicComponent,
        children: [
            {path: 'event', component: EventComponent, canActivate: [AuthGuard]},
            {path: 'myevent', component: MyEventComponent, canActivate: [AuthGuard]},
            {path: 'event/:id', component: EventDetailComponent, canActivate: [AuthGuard]},
        ]
    },

    {
        path: '', component: BlankComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
        ]
    },
    // Handle all other routes


];

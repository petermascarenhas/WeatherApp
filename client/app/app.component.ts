import { Component } from '@angular/core';
import {SubscriptionService} from "./Services/subscription.service";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    // template: '<h1>Angular App </h1> '
    templateUrl: 'app.component.html',
    styleUrls: ['styles.css'],
    providers: [SubscriptionService]

})

export class AppComponent { }
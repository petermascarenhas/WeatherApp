import { Component } from '@angular/core';
import {SubscriptionService} from '../../Services/subscription.service';
import {Subscriber} from '../Subscribers/Subscriber';


@Component({
    moduleId: module.id,
    selector: 'subscribers',
    templateUrl: 'subscription.component.html'
})

export class SubscriptionComponent {
    subscribers: Subscriber[];
    email: string;
    location: string;

    locations = [
        'Anchorage, AK',
         'Austin, TX',
        'Boston, MA',
        'Seattle, WA',
        'Washington, DC'
    ];
    constructor(private subscriberService: SubscriptionService) {

    }


    addSubscriber(event) {
        // event.preventDefault();
        var newSubscriber = {
            email: this.email,
            location: this.location
        }

        this.subscriberService.isExists(newSubscriber)
            .subscribe(subscriber => {

                    if(subscriber!= null && subscriber.email == newSubscriber.email) {
                        alert("You have already registered. Thanks!");
                        this.email = '';
                        this.location = '';

                    }
                    else{
                        this.subscriberService.addSubscriber(newSubscriber)
                            .subscribe(subscriber => {
                                alert("Thanks for subscribing!")
                                this.email = '';
                                this.location = '';


                            })
                    }

            })
    }
}


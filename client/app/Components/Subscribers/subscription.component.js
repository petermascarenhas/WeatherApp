"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var subscription_service_1 = require("../../Services/subscription.service");
var SubscriptionComponent = /** @class */ (function () {
    function SubscriptionComponent(subscriberService) {
        this.subscriberService = subscriberService;
        this.locations = [
            'Anchorage, AK',
            'Austin, TX',
            'Boston, MA',
            'Seattle, WA',
            'Washington, DC'
        ];
    }
    SubscriptionComponent.prototype.addSubscriber = function (event) {
        var _this = this;
        // event.preventDefault();
        var newSubscriber = {
            email: this.email,
            location: this.location
        };
        console.log("yo1", this.subscriberService.isExists(newSubscriber).subscribe());
        console.log(newSubscriber);
        this.subscriberService.isExists(newSubscriber)
            .subscribe(function (subscriber) {
            // for (let entry of subscriber) {
            console.log("in else", subscriber);
            if (subscriber != null && subscriber.email == newSubscriber.email) {
                alert("You have already registered. Thanks!");
                _this.email = '';
                _this.location = '';
            }
            else {
                console.log("in else", newSubscriber);
                console.log("in else", _this.email);
                _this.subscriberService.addSubscriber(newSubscriber)
                    .subscribe(function (subscriber) {
                    alert("Thanks for subscribing!");
                    _this.email = '';
                    _this.location = '';
                });
            }
            // }
        });
        // this.subscriberService.addSubscriber(newSubscriber)
        //     .subscribe(subscriber => {
        //         alert("Thanks for subscribing!")
        //         this.email = '';
        //         this.location = '';
        //
        //
        //     })
    };
    SubscriptionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'subscribers',
            templateUrl: 'subscription.component.html'
        }),
        __metadata("design:paramtypes", [subscription_service_1.SubscriptionService])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());
exports.SubscriptionComponent = SubscriptionComponent;
//# sourceMappingURL=subscription.component.js.map
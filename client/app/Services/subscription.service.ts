import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SubscriptionService{
    constructor(private http:Http){
        console.log('Subscription Service Initialized...');

    }

     addSubscriber(newSubscriber){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/user', JSON.stringify(newSubscriber), {headers: headers})
            .map(res => res.json())
    }

    isExists(newSubscriber){
        return this.http.get('/user/'+newSubscriber.email)
            .map(res =>  res.json())
    }

}
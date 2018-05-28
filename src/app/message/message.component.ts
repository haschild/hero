import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  // 这里定义是 public 是为了给 HTML 使用值
  // 疑问，为何这里注入后直接就有参数值了？
  // 在 hero-service 中赋值，message-service 和 hero-service 同属于 app.module.ts 在区间，值是共享的
  constructor(public messageService: MessageService) { }



  ngOnInit() {
    console.log(this.messageService);
  }

  // Create an Observable that will start listening to geolocation updates
  // when a consumer subscribes.
  // const locations = new Observable((observer) => {
  //   // Get the next and error callbacks. These will be passed in when
  //   // the consumer subscribes.
  //   const { next, error } = observer;
  //   let watchId;

  //   observer ={
  //    next: function(){},
  //    error:function(){},
  //    complate: function(){}
  //   }


  //   // Simple geolocation API check provides values to publish
  //   if ('geolocation' in navigator) {
  //     watchId = navigator.geolocation.watchPosition(next, error);
  //   } else {
  //     error('Geolocation not available');
  //   }

  //   // When the consumer unsubscribes, clean up data ready for next subscription.
  //   return { unsubscribe() { navigator.geolocation.clearWatch(watchId); } };
  // });

  // // Call subscribe() to start listening for updates.
  // const locationsSubscription = locations.subscribe({
  //   next(position) { console.log('Current Position: ', position); },
  //   error(msg) { console.log('Error Getting Location: ', msg); }
  // });

  // // Stop listening for location after 10 seconds
  // setTimeout(() => { locationsSubscription.unsubscribe(); }, 10000);






// Create an Observable that will publish a value on an interval


}
// const secondsCounter = interval(1000);
// // Subscribe to begin publishing values
// secondsCounter.subscribe(n =>
//   console.log(`It's been ${n} seconds since subscribing!`));
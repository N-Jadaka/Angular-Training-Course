import { Observable, Observer, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObservable = new Observable((observer: Observer<any>) => {
      setInterval(() => {
        let count = 0;
        observer.next(count);
        if(count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000)
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy(){
    this.firstObsSubscription.unsubscribe();
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {FlightInformation} from './flight-information';
import {DataService} from './data.service';

const reloadInterval = 1000 * 60; // flight data will get update every 1 minute

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  workers;
  flightsOfWorker: FlightInformation[];
  flightInformation: FlightInformation;
  isLoading = true;
  workerId: number;
  sub: Subscription;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getWorkers().subscribe(data => {
      this.workers = data;
      this.isLoading = false;
      this.getFlightsData(data[0].id);
    });
  }

  getFlightsData(workerId) {
    this.dataService.getFlightsInfo(workerId).subscribe(res => {
      this.flightsOfWorker = res;
      this.flightInformation = this.flightsOfWorker[0];
    });
  }

  getWorkerFlightsInfo(workerId) {
    if (this.sub) { // reset last worker data
      this.sub.unsubscribe();
      this.workerId = workerId;
    }
    this.getFlightsData(this.workerId); // get the data with no-delay for the first time
    this.sub = interval(reloadInterval).pipe() // re-get the data every 1 minute
      .subscribe(() => this.getFlightsData(this.workerId));
  }

  getFlightInfo(flight) {
    this.flightInformation = flight;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

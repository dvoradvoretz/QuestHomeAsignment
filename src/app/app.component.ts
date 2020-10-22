import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription, timer} from 'rxjs';
import {FlightInformation} from './flight-information';
import {DataService} from './data.service';

const reloadInterval = 1000 * 60;

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
  intervalFunc;

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
    this.intervalFunc = setInterval(() => this.getFlightsData(workerId), reloadInterval);
  }

  getFlightInfo(flight) {
    this.flightInformation = flight;
  }

  ngOnDestroy() {
    clearInterval(this.intervalFunc);
  }
}

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

export class AppComponent implements OnInit{
  workers;
  flightsOfWorker: FlightInformation[];
  flightInformation: FlightInformation;
  isLoading = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getWorkers().subscribe(data => {
      this.workers = data;
      this.isLoading = false;
      this.getWorkerFlightsInfo(data[0].id);
    });
  }

  getWorkerFlightsInfo(workerId): Observable<FlightInformation[]> {
    timer(0, reloadInterval) // Get update data from api every 1 min;
      .pipe(() => this.dataService.getFlightsInfo(workerId)
      ).subscribe(res => {
      this.flightsOfWorker = res;
      this.flightInformation = this.flightsOfWorker[0];
    });
    return new Observable();
  }

  getFlightInfo(flight) {
    this.flightInformation = flight;
  }
}

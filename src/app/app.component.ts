import {Component, OnInit} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {mergeMap, switchMap} from 'rxjs/operators';
import {FlightInformation} from './flight-information';
import {WorkersService} from './workers.service';
import {FlightsOfWorkerService} from './flights-of-worker.service';

export const API_URL = 'https://interview-mock.herokuapp.com/api/workers/';
const reloadInterval = 1000 * 60;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  workers;
  flightsOfWorker: FlightInformation[];
  flightInformation: FlightInformation;
  isLoading = true;

  constructor(private workersService: WorkersService,
              private flightsOfWorkerService: FlightsOfWorkerService) {
  }

  ngOnInit() {
    this.workersService.getWorkers().pipe(
      switchMap(data => {
        this.workers = data;
        this.getWorkerFlightsInfo(data[0].id);
        this.isLoading = false;
        return new Observable();
      })
    ).subscribe(_ => {
    });
  }

  getWorkerFlightsInfo(workerId): Observable<FlightInformation[]> {

    timer(0, reloadInterval) // Get update data from api every 1 min;
      .pipe(
        mergeMap(_ => this.flightsOfWorkerService.getFlightsInfo(workerId))
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

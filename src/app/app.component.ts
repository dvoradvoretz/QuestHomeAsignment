import {Component, OnInit} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {mergeMap, switchMap} from 'rxjs/operators';
import {FlightInformation} from './flight-information';
import {DataService} from './data.service';

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

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getWorkers().pipe(
      switchMap(data => {
        this.workers = data;
        this.getWorkerFlightsInfo(data[0].id);
        this.isLoading = false;
        return new Observable();
      })
    ).subscribe();
  }

  getWorkerFlightsInfo(workerId): Observable<FlightInformation[]> {
    timer(0, reloadInterval) // Get update data from api every 1 min;
      .pipe(
        mergeMap(_ => this.dataService.getFlightsInfo(workerId))
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

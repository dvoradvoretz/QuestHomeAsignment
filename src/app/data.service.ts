import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Workers} from './workers';
import {FlightInformation} from './flight-information';

const API_URL = 'https://interview-mock.herokuapp.com/api/workers/';

@Injectable({
  providedIn: 'root'
})


export class DataService {
  workers: Workers[] = [];
  flightsInfo: FlightInformation[] = [];
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  error;

  constructor(private http: HttpClient) {
  }

  getWorkers(): Observable<Workers[]> {
    return this.http.get(API_URL, {})
      .pipe(catchError(this.error));
  }

  getFlightsInfo(workerId): Observable<FlightInformation[]> {
    return this.http.get(API_URL + workerId, {})
      .pipe(catchError(this.error));
  }
}

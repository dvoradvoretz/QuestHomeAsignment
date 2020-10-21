import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {API_URL} from './app.component';
import {FlightInformation} from './flight-information';

@Injectable({
  providedIn: 'root'
})
export class FlightsOfWorkerService {
  flightsInfo: FlightInformation[] = [];
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  error;

  constructor(private http: HttpClient) {
  }

  getFlightsInfo(workerId): Observable<FlightInformation[]> {
    return this.http.get(API_URL + workerId, {})
      .pipe(catchError(this.error));
  }
}

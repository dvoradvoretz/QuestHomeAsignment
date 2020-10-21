import {Injectable} from '@angular/core';
import {Workers} from './workers';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {API_URL} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  workers: Workers[] = [];
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  error;
  constructor(private http: HttpClient) {
  }

  getWorkers(): Observable<Workers[]> {
    return this.http.get(API_URL, {})
      .pipe(catchError(this.error));
  }
}

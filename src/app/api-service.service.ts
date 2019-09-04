import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Pod } from './models/pod-mode';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Dc } from './models/dc-model';
import { Gomez } from './models/gomez-model';
import { Customer } from './models/customers-model';
import { Pingdom } from './models/pingdom-model';
import { CriticalDb } from './models/criticalDb-model';
import { Internal } from './models/internal-model';
import { Authserver } from './models/authServer-model';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor( private http: HttpClient ) { }
  apiUrl = 'http://localhost:3000/'

  podsApi(): Observable<Pod> {
    return this.http.get<Pod>(this.apiUrl + 'pods')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  dcsApi(): Observable<Dc> {
    return this.http.get<Dc>(this.apiUrl + 'dcs')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  customerApi(): Observable<Customer> {
    return this.http.get<Customer>(this.apiUrl + 'customers')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  gomezApi(): Observable<Gomez> {
    return this.http.get<Gomez>(this.apiUrl + 'gomez')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  pingdomApi(): Observable<Pingdom> {
    return this.http.get<Pingdom>(this.apiUrl + 'pingdom')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  criticalDbApi(): Observable<CriticalDb> {
    return this.http.get<CriticalDb>(this.apiUrl + 'criticalDb')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  internalDnsApi(): Observable<Internal> {
    return this.http.get<Internal>(this.apiUrl + 'internal')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  storageApi(): Observable<Storage> {
    return this.http.get<Storage>(this.apiUrl + 'storage')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  authserverApi(): Observable<Authserver> {
    return this.http.get<Authserver>(this.apiUrl + 'authserver')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };



  handleError(error){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage)

  }

}

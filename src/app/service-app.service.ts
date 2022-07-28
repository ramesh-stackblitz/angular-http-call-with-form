import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, observable, pipe, tap, retry } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceAppService {


  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(tap());
  }

  getJson() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(tap());
  }

  handleError(HttpErrorResponse: any) {
    
  }
}

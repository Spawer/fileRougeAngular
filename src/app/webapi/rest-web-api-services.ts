import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WebApi } from './web-api';
import { Candidate} from '../model/candidate';

const baseUrl = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class RestWebApiService extends WebApi {

  constructor(private readonly http: HttpClient) {
    super();
  }

  createTodo(candidate: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(`${baseUrl}/todos`,);
  }
}
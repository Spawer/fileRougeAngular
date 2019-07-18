import { Injectable } from '@angular/core';
import { WebApi } from './web-api';
import { Observable, of } from 'rxjs';
import { Candidate } from 'app/model/candidate';

const Candidates ={
  id: 0,
  email: 'hey@gmail.com',
  firstname: 'seb',
  lastname: 'dac'
};

@Injectable({
  providedIn: 'root'
})
export class MockWebApiService implements WebApi {

  constructor() { }

 

  createTodo(candidate: Candidate): Observable<Candidate> {
    throw new Error('Not implemented');
  }
}

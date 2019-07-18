import { Injectable } from '@angular/core';
import { WebApi } from './web-api';
import { Observable, of } from 'rxjs';
import { Candidate } from 'app/model/candidate';


const Candidates =[{
  id: 0,
  email: 'hey@gmail.com',
  firstName: 'seb',
  lastName: 'dac'
},{
  id:1,
  email:'ho@fmail.com',
  firstName: 'adrian',
  lastName:'ad'
}
];

@Injectable({
  providedIn: 'root'
})
export class MockWebApiService implements WebApi {

  constructor() {
  }

  createCandidate(candidate: Candidate): Observable<Candidate> {
    throw new Error('Not implemented');
  }
  getCandidates(id: number): Observable<Candidate[]> {
    return of(Candidates);
  }
}

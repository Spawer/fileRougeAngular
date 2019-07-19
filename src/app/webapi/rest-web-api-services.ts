import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WebApi } from './web-api';
import { Candidate} from '../model/candidate';

const baseUrl = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class RestWebApiService extends WebApi {
  createQuestion(question: import("../model/question").Question): Observable<import("../model/question").Question> {
    throw new Error("Method not implemented.");
  }
  getCandidate(id: number): Candidate {
    throw new Error("Method not implemented.");
  }
  getQuestionById(id: number): Observable<import("../model/question").Question> {
    throw new Error("Method not implemented.");
  }

  constructor(private readonly http: HttpClient) {
    super();
  }

  createCandidate(candidate: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(`${baseUrl}/candidates`,candidate);
  }

}
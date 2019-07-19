import { Candidate } from 'app/model/candidate';
import { Observable } from 'rxjs';

export interface CandidateApi {
  createCandidate(candidate: Candidate):Observable<Candidate>;
  getCandidate(id: number): Candidate;

}

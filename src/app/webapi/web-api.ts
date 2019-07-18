import { Observable } from 'rxjs';
import { Candidate} from '../model/candidate';

export abstract class WebApi {
  abstract createCandidate(candidate: Candidate): Observable<Candidate>;
}
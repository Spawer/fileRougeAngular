import { Candidate } from 'app/model/candidate';

export interface CandidateApi {
  createCandidate(candidate: Candidate): Candidate;
  getCandidate(id: number): Candidate;

}

import { Candidate } from 'app/model/candidate';
import { CandidateApi } from './candidate-api';
import { QuestionApi } from './question-api';
import { Question } from 'app/model/question';
import { Observable } from 'rxjs';

export abstract class WebApi implements CandidateApi, QuestionApi {
  abstract createCandidate(candidate: Candidate): Candidate;
  abstract getCandidate(id: number): Candidate;
  abstract createQuestion(question: Question): Observable<Question>;
  abstract getQuestionById(id: number): Observable<Question>;


}

import { Question } from 'app/model/question';
import { Observable } from 'rxjs';

export interface QuestionApi {
  createQuestion(question: Question): Observable<Question>;
  getQuestionById(id: number): Observable<Question>;
}

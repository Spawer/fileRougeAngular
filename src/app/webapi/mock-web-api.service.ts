import { Proposition } from 'app/model/proposition';
import { Injectable } from '@angular/core';
import { Candidate } from 'app/model/candidate';
import { CandidateApi } from './candidate-api';
import { QuestionApi } from './question-api';
import { WebApi } from './web-api';
import { Question, QuestionType } from 'app/model/question';
import { Observable, of } from 'rxjs';
import { PropositionMcq } from 'app/model/proposition-mcq';


const questions: Question[] = [];

@Injectable({
  providedIn: 'root'
})
export class MockWebApiService implements WebApi, CandidateApi, QuestionApi {

  questId = 0;

  createQuestion(question: Question): Observable<Question> {

    throw new Error('Method not implemented.');
  }
  getQuestionById(id: number): Observable<Question> {
    return of(questions.find(q => q.id === id));
  }
  createCandidate(candidate: Candidate): Candidate {
    throw new Error('Method not implemented.');
  }
  getCandidate(id: number): Candidate {
    throw new Error('Method not implemented.');
  }

  constructor() {
    let id = 0;
    for (this.questId = 0; this.questId < 5; this.questId++) {
      const q: Question = { id: this.questId,
                            questionType: QuestionType.MCQ,
                            statement: `Libellé de la question ${this.questId + 1}`,
                            proposition: null,
                            propositions: [] };
      for (let j = 0; j < 4; j++) {
        const p: PropositionMcq = {id: id++, statement: `Texte de la proposition ${j}`, question: q, isRight: id % 2 === 0 };
        q.propositions.push(p);
      }
      questions.push(q);
    }
  }
}

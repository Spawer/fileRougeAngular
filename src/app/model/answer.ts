import { Questionnaire } from './questionnaire';
import { Candidate } from './candidate';
import { Question } from './question';

export interface Answer {
  id: number;
  answer: string;
  candidate: Candidate;
  question: Question;
  questionnaire: Questionnaire;
}

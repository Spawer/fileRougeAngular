import { Questionnaire } from './questionnaire';
import { Candidate } from './candidate';
import { Question } from './question';

export interface Answer {
  answer: string;
  candidate: Candidate;
  question: Question;
  questionnaire: Questionnaire;
}

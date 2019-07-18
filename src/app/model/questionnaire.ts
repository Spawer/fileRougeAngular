import { Question } from './question';

export interface Questionnaire {
  isValid: boolean;
  name: string;
  questions: Question[];
}

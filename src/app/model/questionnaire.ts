import { Question } from './question';

export interface Questionnaire {
  id: number;
  isValid: boolean;
  name: string;
  questions: Question[];
}

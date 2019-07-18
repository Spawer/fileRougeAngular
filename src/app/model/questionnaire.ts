import { Conceptor } from './conceptor';
import { Question } from './question';

export interface Questionnaire {
  id: number;
  conceptor: Conceptor;
  isValid: boolean;
  name: string;
  questions: Question[];
}

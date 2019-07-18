import { Question } from './question';

export interface Proposition {
  id: number;
  question: Question;
  statement: string;
}

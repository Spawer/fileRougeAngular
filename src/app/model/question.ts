import { PropositionMcq } from './proposition-mcq';
import { Proposition } from './proposition';

export enum QuestionType {
  MCQ, OPEN, PROGRAMMING
}
export interface Question {
  id: number;
  proposition: Proposition;
  propositions: PropositionMcq[];
  questionType: QuestionType;
  statement: string;
}

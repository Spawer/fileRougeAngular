import { Answer } from './answer';
import { PropositionMcq } from './proposition-mcq';
export interface AnswerMcq extends Answer {
  propositionSelected: PropositionMcq;
}

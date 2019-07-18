import { PropositionMcq } from './proposition-mcq';
import { Proposition } from './proposition';
export interface Question {
  proposition: Proposition;
  propositions: PropositionMcq[];
  statement: string;
}

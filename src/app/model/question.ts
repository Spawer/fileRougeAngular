import { PropositionMcq } from './proposition-mcq';
import { Proposition } from './proposition';
export interface Question {
  id: number;
  proposition: Proposition;
  propositions: PropositionMcq[];
  statement: string;
}

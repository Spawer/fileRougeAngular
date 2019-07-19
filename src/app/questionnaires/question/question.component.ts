import { Question, QuestionType } from 'app/model/question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() public question: Question;

  constructor() { }

  ngOnInit() {
  }

  get isMcq(): boolean {
    return this.question.questionType === QuestionType.MCQ;
  }

  get isProgramming(): boolean {
    return this.question.questionType === QuestionType.PROGRAMMING;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'app/model/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  @Input() questions: Question[];

  constructor() { }

  ngOnInit() {
  }

}

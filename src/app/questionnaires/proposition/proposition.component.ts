import { Proposition } from './../../model/proposition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.scss']
})
export class PropositionComponent implements OnInit {

  @Input() proposition: Proposition;

  constructor() { }

  ngOnInit() {
  }

}

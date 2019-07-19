import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const firstname = form.value[' firstname '];
    const lastname = form.value[' lastname '];
    const email = form.value[' email '];
    this.router.navigate(['/questionnaires']);
}

}

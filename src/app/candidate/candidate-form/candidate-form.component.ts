import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidate } from 'app/model/candidate';
import { RestWebApiService } from 'app/webapi/rest-web-api-services';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent implements OnInit {

  candidate: Candidate;
  constructor(private router: Router,private api: RestWebApiService) { }

  ngOnInit() {
  }
  addCandidate(firstname,lastname,email){
    this.candidate.firstName =firstname;
    this.candidate.lastName= lastname;
    this.candidate.email=email;
    this.api.createCandidate(this.candidate);



  }
  onSubmit(form: NgForm) {
    const firstname = form.value[' firstname '];
    const lastname = form.value[' lastname '];
    const email = form.value[' email '];
    this.addCandidate(firstname,lastname,email);
    this.router.navigate(['/questionnaires']);
}

}

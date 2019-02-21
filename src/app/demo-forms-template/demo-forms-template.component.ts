import { Component, OnInit } from '@angular/core';

interface Personne {
  firstname: string;
  lastname: string;
}

@Component({
  selector: 'app-demo-forms-template',
  templateUrl: './demo-forms-template.component.html',
  styleUrls: ['./demo-forms-template.component.css']
})
export class DemoFormsTemplateComponent implements OnInit {
  unePersonne: Personne = {
    firstname: '',
    lastname: ''
  };

  constructor() {}

  ngOnInit() {}

  valider() {
    console.log(this.unePersonne);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-reactive-forms',
  templateUrl: './demo-reactive-forms.component.html',
  styleUrls: ['./demo-reactive-forms.component.css']
})
export class DemoReactiveFormsComponent implements OnInit {
  monForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.monForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required]]
    });
  }
}

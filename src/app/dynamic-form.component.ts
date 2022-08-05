import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';
import questionnaireData from '../assets/questionnaire.json'; 
interface optionValue {
  code: string;
  display: string;
}
interface T {
  value: undefined;
  linkId: string;
  text: string;
  required: boolean;
  controlType: string;
  type: string;
  option: {valueCoding: optionValue}[]|undefined;
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ],
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    let questionnaire = questionnaireData["item"];
    let output = "";
    for (const [key, answer] of Object.entries(this.form.getRawValue())) {
      let question = questionnaire[parseInt(key)-1];
      output += `<strong>Question</strong>: ${question.text} <br> <strong>Answer</strong>: ${answer} <br>  <br> `;
    }
    this.payLoad = output;
  }
}
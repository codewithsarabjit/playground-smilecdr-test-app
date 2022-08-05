import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import questionnaireData from '../assets/questionnaire.json'; 

@Injectable()
export class QuestionService {
  // get question metadata from json file
  getQuestions() {
    return of(questionnaireData["item"]);
  }
}
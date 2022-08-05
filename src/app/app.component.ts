import { Component } from '@angular/core';

import { QuestionService } from './question.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:  [QuestionService]
})
export class AppComponent {
  title = 'playground-smilecdr-test-app';
  questions$: Observable<any[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}

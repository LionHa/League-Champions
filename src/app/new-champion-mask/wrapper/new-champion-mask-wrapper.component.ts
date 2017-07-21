import { Component }       from '@angular/core';

import { QuestionService } from '../../core/services/question.service';

@Component({
  selector: 'new-champion-mask-dynamic',
  templateUrl: './new-champion-mask-wrapper.component.html',
  styleUrls: ['./new-champion-mask-wrapper.component.css'],
  providers:  [QuestionService]
})
export class NewChampionMaskDynamicForm {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}

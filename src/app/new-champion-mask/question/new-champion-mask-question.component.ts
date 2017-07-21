import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from './question-base.interface';

@Component({
  selector: 'df-question',
  templateUrl: './new-champion-mask-question.component.html',
  styleUrls: ['./new-champion-mask-question.component.css']
})
export class NewChampionMaskDynamicQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}

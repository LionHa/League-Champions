import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {QuestionBase} from '../../new-champion-mask/question/question-base.interface';

@Injectable()
export class QuestionControlService {
  constructor() {}

  toFormGroup(questionservice: QuestionBase<any>[]) {
    let group: any = {};

    questionservice.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Form, FormGroup} from '@angular/forms';

import {QuestionBase} from '../../question/question-base.interface';
import {QuestionControlService} from '../../../core/services/question-control.service';
import {NewChampionMaskDynamic} from '../new-champion-mask-form.component';

@Component({
  selector: 'form',
  templateUrl: './form-metadata.component.html',
  providers: [QuestionControlService]
})
export class FormMetaData implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];

  constructor(private questionControlService: QuestionControlService) {
    //this.questions = this.questions.filter(quest => quest.type === 'metadata');
    //console.log(this.questions);
    //this.questionControlService.toFormGroup(this.questions);
  }

  ngOnInit() {
    console.log('awfawg');
    //this.questions = this.questions.filter(quest => quest.type === 'ability');
    //console.log(this.questions);
    //console.log(this.questions.find(quest => quest.key === 'mana'));
    //this.form = this.questionControlService.toFormGroup(this.questions);
  }
}

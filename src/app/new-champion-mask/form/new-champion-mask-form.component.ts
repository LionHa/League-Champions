import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../question/question-base.interface';
import { QuestionControlService }    from '../../core/services/question-control.service';


@Component({
  selector: 'dynamic-form',
  templateUrl: './new-champion-mask-form.component.html',
  providers: [ QuestionControlService ]
})
export class NewChampionMaskDynamic implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private questionControlService: QuestionControlService) {  }

  ngOnInit() {
    //this.questions = this.questions.filter(quest => quest.type === 'ability');
    //console.log(this.questions);
    //console.log(this.questions.find(quest => quest.key === 'mana'));
    //this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}

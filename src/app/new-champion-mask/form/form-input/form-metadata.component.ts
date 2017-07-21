import {Component, Input, OnInit} from '@angular/core';
import {Form, FormGroup} from '@angular/forms';

import {QuestionBase} from '../../question/question-base.interface';
import {QuestionControlService} from '../../../core/services/question-control.service';


@Component({
  selector: 'form',
  templateUrl: './form-metadata.component.html',
  providers: [QuestionControlService]
})
export class NewChampionMaskDynamic implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];

  //form: FormGroup;

  constructor(private questionControlService: QuestionControlService) {
  }

  ngOnInit() {
    //this.questions = this.questions.filter(quest => quest.type === 'metadata');
    //console.log(this.questions);
    //console.log(this.questions.find(quest => quest.key === 'title'));
    //this.form = this.questionControlService.toFormGroup(this.questions);
  }
}

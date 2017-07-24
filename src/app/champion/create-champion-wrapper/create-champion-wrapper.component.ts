import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../../core/services/question.service';

/**
 * this is the wrapper component which will seperate the different question types into different components
 *
 * @compnent
 */
@Component({
  selector: 'create-champion-wrapper',
  templateUrl: './create-champion-wrapper.component.html',
  styleUrls: ['./create-champion-wrapper.component.css']
})
export class CreateNewChampionWrapper implements OnInit {
  // contains all questions
  private questions: any[];
  // contains the subset of questions with the type metadata
  private metaQuestions: any[];
  // contains the subset of questions with the type attribute
  private attributeQuestions: any[];
  // contains the subset of questions with the type ability
  private abilityQuestions: any[];

  public constructor(private questionService: QuestionService) {
  }

  public ngOnInit(): void {
    // getting all questions
    this.questions = this.questionService.getQuestions();
    this.splitQuestionByType(this.questions);
  }

  /**
   * this function will split the given array into the fixed question types
   * currently there are 3 types 'metadata', 'attribute', 'ability'
   * @param {any[]} questions - array of questions e.g. given from the QuestionService
   */
  public splitQuestionByType(questions: any[]): void {
    this.metaQuestions = this.questions.filter(question => question.type === 'metadata');
    this.attributeQuestions = this.questions.filter(question => question.type === 'attribute');
    this.abilityQuestions = this.questions.filter(question => question.type === 'ability');
  }
}

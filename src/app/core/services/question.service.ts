import { Injectable }       from '@angular/core';

import { DropdownQuestion } from '../../new-champion-mask/question/question-dropdown.component';
import { QuestionBase }     from '../../new-champion-mask/question/question-base.interface';
import { TextboxQuestion }  from '../../new-champion-mask/question/question-textbox.component';

/**
 *
 * @Injectable
 */
@Injectable()
export class QuestionService {
  /**
   *
   * @returns {QuestionBase<any>[]}
   */
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'name',
        type: 'metadata',
        label: 'Name',
        required: true,
        pattern: '^[A-Za-z\\s]{2,}',
        order: 1
      }),

      new TextboxQuestion({
        key: 'title',
        type: 'metadata',
        label: 'Title',
        required: true,
        pattern: '^[A-Za-z\\s.,-]{2,}',
        order: 2
      }),

      new TextboxQuestion({
        key: 'release',
        type: 'metadata',
        label: 'Release Date',
        required: true,
        pattern: '^[0-9]{4}\.[0-9]{2}',
        order: 3
      }),

      new DropdownQuestion({
        key: 'faction',
        type: 'metadata',
        label: 'Faction',
        options: [
          {key: 'piltover',  value: 'Piltover'},
          {key: 'demacia',  value: 'Demacia'},
          {key: 'shadow isles',   value: 'Shadow Isles'},
          {key: 'unknown', value: 'Unknown'}
        ],
        required: true,
        order: 4
      }),

      new TextboxQuestion({
        key: 'role',
        type: 'metadata',
        label: 'Role(s)',
        required: true,
        pattern: '^[A-Za-z\\s.,-]{2,}',
        order: 5
      }),

      new TextboxQuestion({
        key: 'passive',
        type: 'ability',
        label: 'Passive',
        required: true,
        pattern: '^[A-Za-z0-9\\s.,-]{2,}',
        order: 6
      }),

      new TextboxQuestion({
        key: 'abilityq',
        type: 'ability',
        label: 'Ability Q',
        required: true,
        pattern: '^[A-Za-z0-9\\s.,-]{2,}',
        order: 7
      }),

      new TextboxQuestion({
        key: 'abilityw',
        type: 'ability',
        label: 'Ability W',
        required: true,
        pattern: '^[A-Za-z0-9\\s.,-]{2,}',
        order: 8
      }),

      new TextboxQuestion({
        key: 'abilitye',
        type: 'ability',
        label: 'Ability E',
        required: true,
        pattern: '^[A-Za-z0-9\\s.,-]{2,}',
        order: 9
      }),

      new TextboxQuestion({
        key: 'abilityr',
        type: 'ability',
        label: 'Ability R',
        required: true,
        pattern: '^[A-Za-z0-9\\s.,-]{2,}',
        order: 10
      }),

      new TextboxQuestion({
        key: 'health',
        type: 'attribute',
        label: 'Health',
        required: true,
        pattern: '^[0-9]{1,5}',
        order: 11
      }),

      new TextboxQuestion({
        key: 'healthregen',
        type: 'attribute',
        label: 'Health Regen.',
        required: true,
        pattern: '^[0-9]{1,5}(\.[0-9]{1,3})?',
        order: 12
      }),

      new TextboxQuestion({
        key: 'mana',
        type: 'attribute',
        label: 'Mana',
        required: true,
        pattern: '^[0-9]{1,5}',
        order: 13
      }),

      new TextboxQuestion({
        key: 'manaregen',
        type: 'attribute',
        label: 'Mana Regen.',
        required: true,
        pattern: '^[0-9]{1,5}(\.[0-9]{1,3})?',
        order: 14
      }),

      new TextboxQuestion({
        key: 'attackrange',
        type: 'attribute',
        label: 'Attack Range',
        required: true,
        pattern: '^[0-9]{2,5}',
        order: 15
      }),

      new TextboxQuestion({
        key: 'attackdamage',
        type: 'attribute',
        label: 'Attack Damage',
        required: true,
        pattern: '^[0-9]{1,5}',
        order: 16
      }),

      new TextboxQuestion({
        key: 'attackspeed',
        type: 'attribute',
        label: 'Attack Speed',
        required: true,
        pattern: '^[0-9]{3,5}\.[0-9]{1,3}',
        order: 17
      }),

      new TextboxQuestion({
        key: 'armor',
        type: 'attribute',
        label: 'Armor',
        required: true,
        pattern: '^[0-9]{1,5}',
        order: 18
      }),

      new TextboxQuestion({
        key: 'magicresist',
        type: 'attribute',
        label: 'Magic Resist.',
        required: true,
        pattern: '^[0-9]{1,5}',
        order: 19
      }),

      new TextboxQuestion({
        key: 'movementspeed',
        type: 'attribute',
        label: 'Movement Speed',
        required: true,
        pattern: '^[0-9]{1,5}',
        order: 20
      }),

    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}

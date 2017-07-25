import {Component} from '@angular/core';
import {Champion} from '../../core/interface/champion-base.interface';

@Component({
  selector: 'create-champion-form',
  templateUrl: './create-champion-component.html',
  styleUrls: ['./create-champion-component.css']
})
export class CreateChampionFormComponent {

  public model = new Champion();
  public submitted = false;

  public onSubmit() {
    this.submitted = true;
  }
}

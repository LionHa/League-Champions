import {Component, OnInit} from '@angular/core';
import {Champion} from '../core/interface/champion-base.interface';
import {ChampionService} from '../core/service/champion.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /**
   * Contains all champions
   * @type {Array}
   */
  champions: Champion[] = [];

  constructor(private championService: ChampionService) {
  }

  /**
   * Gets all champions at initialization
   * Returns all the first 8 Champions out of the returned array
   */
  ngOnInit(): void {
    this.championService.getChampions()
      .then(champions => this.champions = champions.slice(0, 8));
  }
}

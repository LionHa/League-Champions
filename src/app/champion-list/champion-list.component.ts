import {Component, OnInit} from '@angular/core';
import {Champion} from '../core/interface/champion-base.interface';
import {ChampionService} from '../core/service/champion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'champions-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css'],
  providers: [ChampionService]
})

export class ChampionListComponent implements OnInit {
  // Array of all Champions
  public champions: Champion[];
  // Selected Champ Object
  public selectedChamp: Champion;

  constructor(private router: Router,
              private championService: ChampionService) {
  }

  /**
   * Gets all champions from the champion service
   */
  getChampions(): void {
    this.championService.getChampions().then(champions => this.champions = champions);
  }

  /**
   * Gets all champions at initialization
   */
  ngOnInit(): void {
    this.getChampions();
  }

  /**
   * Sets the currently selected champ to the 'champ' value
   * @param {Champion} champ
   */
  onSelect(champ: Champion): void {
    this.selectedChamp = champ;
  }

  /**
   * goes to the selected champions profile
   */
  gotoProfile(): void {
    this.router.navigate(['/champion', this.selectedChamp.id]);
  }
}

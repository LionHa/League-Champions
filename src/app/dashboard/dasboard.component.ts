import { Component, OnInit } from '@angular/core';
import { Champion } from '../core/champion-base.interface';
import { ChampionService } from '../core/services/champion.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  champions: Champion[] = [];

  constructor(private championService: ChampionService) { }

  ngOnInit(): void {
    this.championService.getChampions()
      .then(champions => this.champions = champions.slice(0, 8));
  }
}

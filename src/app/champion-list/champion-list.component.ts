import { Component } from '@angular/core';
import { Champion } from '../core/champion-base.interface';
import { ChampionService } from '../core/services/champion.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'champions-list',
  templateUrl: './champion-list.component.html',
  styleUrls: [ './champion-list.component.css'],
  providers: [ChampionService]
})

export class ChampionListComponent implements OnInit {
  champions: Champion[];
  selectedChamp: Champion;

  constructor(
    private router: Router,
    private championService: ChampionService) { }

  getChampions(): void {
    this.championService.getChampions().then(champions => this.champions = champions);
  }

  ngOnInit(): void {
    this.getChampions();
  }

  onSelect(champ: Champion): void {
    this.selectedChamp = champ;
  }

  gotoProfile(): void {
    this.router.navigate(['/champion', this.selectedChamp.id]);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Champion } from '../core/champion-base.interface';
import { ChampionService } from '../core/services/champion.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'champ-profile',
  templateUrl: './champion-profile.component.html',
  styleUrls: [ './champion-profile.component.css']
})

export class ChampProfileComponent implements OnInit{
  @Input() champion: Champion;
  constructor(
    private championService: ChampionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.championService.getChamp(+params.get('id')))
      .subscribe(champion => this.champion = champion);
  }
  goBack(): void {
    this.location.back();
  }
}

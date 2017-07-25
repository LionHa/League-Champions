import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {Champion} from '../core/interface/champion-base.interface';
import {ChampionService} from '../core/service/champion.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'champ-profile',
  templateUrl: './champion-profile.component.html',
  styleUrls: ['./champion-profile.component.css']
})

export class ChampProfileComponent implements OnInit {
  @Input() champion: Champion;

  constructor(private championService: ChampionService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  /**
   * Gets all information about the champion which its profile is about to get opened.
   * Gets all information through the championservice.
   */
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.championService.getChamp(+params.get('id')))
      .subscribe(champion => this.champion = champion);
  }

  /**
   * Goes to the previous loaded site. (Browser-action)
   */
  goBack(): void {
    this.location.back();
  }
}

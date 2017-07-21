import { Injectable } from '@angular/core';
import { Champion } from '../champion-base.interface';
import { CHAMPIONS } from '../mock-champions';

@Injectable()
export class ChampionService {
  getChampions(): Promise<Champion[]> {
    return Promise.resolve(CHAMPIONS);
  }
  getChamp(id: number): Promise<Champion> {
    return this.getChampions()
      .then(champions => champions.find(champ => champ.id === id));
  }
}

import {Injectable} from '@angular/core';
import {Champion} from '../interface/champion-base.interface';
import {CHAMPIONS} from '../mock-data/mock-champion';

@Injectable()
export class ChampionService {
  /**
   * Returns a list of all champions
   * @returns {Promise<Champion[]>}
   */
  getChampions(): Promise<Champion[]> {
    return Promise.resolve(CHAMPIONS);
  }

  /**
   * Gets information about a single champion
   * Searches for the Champion in the returned list when its returned by its 'id'.
   * @param {number} id
   * @returns {Promise<Champion>}
   */
  getChamp(id: number): Promise<Champion> {
    return this.getChampions()
      .then(champions => champions.find(champ => champ.id === id));
  }
}

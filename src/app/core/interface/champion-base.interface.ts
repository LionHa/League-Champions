import {Ability} from './ability-base.interface';

/**
 * Basic interface for all champions
 * Uses the Ability interface for a champions abilities.
 */
export class Champion {
  id: number;
  name: string;
  title: string;
  role: string;
  faction: string;
  release: number;
  passive: string;
  abilities: Ability[];
  health: number;
  healthregeneration: number;
  mana: number;
  manaregeneration: number;
  attackrange: number;
  attackdamage: number;
  attackspeed: number;
  armor: number;
  magicresist: number;
  movementspeed: number;
}

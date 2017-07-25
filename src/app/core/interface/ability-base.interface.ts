/**
 * Basic interface for all abilities.
 */
export interface Ability {
  shortcut: string;
  name: string;
  description?: string;
  maxlevel: number;
}

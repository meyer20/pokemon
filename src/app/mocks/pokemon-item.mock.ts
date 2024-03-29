import {
  IDefaultPokemonItem,
  IPokemonItem,
  IPokemonItemAbilities,
  IPokemonItemSprites,
  IPokemonItemStats,
  IPokemonItemTypes
} from '../domain';

export class PokemonItemMock implements IPokemonItem {
  name: string;
  abilities: Array<IPokemonItemAbilities>;
  // tslint:disable-next-line:variable-name
  base_experience: 50;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  forms: Array<any>;
  height: 50;
  id: string;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  moves: Array<any>;
  order: 5;
  species: IDefaultPokemonItem;
  sprites: IPokemonItemSprites;
  stats: Array<IPokemonItemStats>;
  types: Array<IPokemonItemTypes>;
  weight: 60;
  favorite: boolean;
}

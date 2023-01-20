import {
  IDefaultPokemonItem,
  IPokemonItem,
  IPokemonItemAbilities,
  IPokemonItemSprites,
  IPokemonItemStats,
  IPokemonItemTypes
} from '../interfaces';
import { Utils } from '../../components/utils/utils';

export class Pokemon implements IPokemonItem {
  constructor(pokemonItem: IPokemonItem) {
    Object.assign(this, pokemonItem);
  }

  id: string;
  abilities: Array<IPokemonItemAbilities>;
  base_experience: number;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  forms: Array<any>;
  height: number;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  moves: Array<any>;
  name: string;
  order: number;
  species: IDefaultPokemonItem;
  sprites: IPokemonItemSprites;
  stats: Array<IPokemonItemStats>;
  types: Array<IPokemonItemTypes>;
  weight: number;
  favorite?: boolean;

  get sprite(): string {
    // Utils gerando dependencia circular, corrigir
    return Utils.getPokemonSpriteURL(this.id);
  }

  // TODO Colocar isso dentro dos Types do pokemon
  get pokemonTypes(): Array<string> {
    return this.types.map((pokemonType) => {
      return pokemonType.type.name;
    });
  }
}

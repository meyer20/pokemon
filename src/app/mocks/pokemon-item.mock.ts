import {
  DefaultPokemonItemInterface,
  PokemonItem,
  PokemonItemAbilities,
  PokemonItemSprites,
  PokemonItemStats,
  PokemonItemTypes
} from '../domain';

export class PokemonItemMock implements PokemonItem {
  name: string;
  abilities: Array<PokemonItemAbilities>;
  base_experience: 50;
  forms: Array<any>;
  height: 50;
  id: string;
  moves: Array<any>;
  order: 5;
  species: DefaultPokemonItemInterface;
  sprites: PokemonItemSprites;
  stats: Array<PokemonItemStats>;
  types: Array<PokemonItemTypes>;
  weight: 60;
  favorite: boolean;
}

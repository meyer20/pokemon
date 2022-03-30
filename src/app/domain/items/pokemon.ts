import {
  IDefaultPokemonItem,
  IPokemonItem,
  IPokemonItemAbilities,
  IPokemonItemSprites,
  IPokemonItemStats,
  IPokemonItemTypes
} from '../interfaces';
import { Utils } from '../../components/utils';

export class Pokemon implements IPokemonItem {
  id: string;
  abilities: Array<IPokemonItemAbilities>;
  base_experience: number;
  forms: Array<any>;
  height: number;
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

export function PokemonFactory(pokemonData: IPokemonItem): Pokemon {
  const pokemon = new Pokemon();

  pokemon.id = pokemonData.id;
  pokemon.abilities = pokemonData.abilities;
  pokemon.base_experience = pokemonData.base_experience;
  pokemon.forms = pokemonData.forms;
  pokemon.height = pokemonData.height;
  pokemon.moves = pokemonData.moves;
  pokemon.name = pokemonData.name;
  pokemon.order = pokemonData.order;
  pokemon.species = pokemonData.species;
  pokemon.sprites = pokemonData.sprites;
  pokemon.stats = pokemonData.stats;
  pokemon.types = pokemonData.types;
  pokemon.weight = pokemonData.weight;
  pokemon.favorite = pokemonData.favorite;

  return pokemon;
}

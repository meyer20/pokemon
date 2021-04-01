export interface PokemonItem {
  abilities: Array<PokemonItemAbilities>;
  base_experience: number;
  forms: Array<any>;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<any>;
  name: string;
  order: number;
  species: DefaultPokemonItemInterface;
  sprites: PokemonItemSprites;
  stats: Array<PokemonItemStats>;
  types: Array<PokemonItemTypes>;
  weight: number;
  favorite?: boolean;
}

export interface DefaultPokemonItemInterface {
  name: string;
  url: string;
}

export interface PokemonItemAbilities {
  ability: DefaultPokemonItemInterface;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonItemTypes {
  slot: number;
  type: DefaultPokemonItemInterface;
}

export interface PokemonItemSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface PokemonItemTypes {
  slot: number;
  type: DefaultPokemonItemInterface;
}

export interface PokemonItemStats {
  base_stat: number;
  effort: number;
  stat: DefaultPokemonItemInterface;
}

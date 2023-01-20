export interface IPokemonItem {
  abilities: Array<IPokemonItemAbilities>;
  base_experience: number;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  forms: Array<any>;
  height: number;
  id: string;
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
}

export interface IDefaultPokemonItem {
  name: string;
  url: string;
}

export interface IPokemonItemAbilities {
  ability: IDefaultPokemonItem;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonItemTypes {
  slot: number;
  type: IDefaultPokemonItem;
}

export interface IPokemonItemSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface IPokemonItemTypes {
  slot: number;
  type: IDefaultPokemonItem;
}

export interface IPokemonItemStats {
  base_stat: number;
  effort: number;
  stat: IDefaultPokemonItem;
}

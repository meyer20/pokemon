import { Observable, of } from 'rxjs';

import { PokemonItem, PokemonListItem, ResponseItem } from '../domain';

export class PokemonApiMock {
  public getPokemonById(pokemonId: string): Observable<PokemonItem> {
    return of({
      id: pokemonId,
      abilities: [],
      base_experience: 0,
      forms: [],
      height: 1,
      is_default: false,
      location_area_encounters: '',
      moves: [],
      name: pokemonId,
      order: 0,
      species: {
        url: pokemonId,
        name: pokemonId
      },
      sprites: {
        back_default: pokemonId + '.png',
        back_female: pokemonId + '.png',
        back_shiny: pokemonId + '.png',
        back_shiny_female: pokemonId + '.png',
        front_default: pokemonId + '.png',
        front_female: pokemonId + '.png',
        front_shiny: pokemonId + '.png',
        front_shiny_female: pokemonId + '.png'
      },
      stats: [],
      types: [{
        slot: 0,
        type: {
          name: pokemonId,
          url: pokemonId
        }
      }],
      weight: 0,
      favorite: true
    });
  }

  public getPokemonList(): Observable<ResponseItem<PokemonListItem>>{
    return of({
      previous: null,
      next: '2',
      count: 1,
      results: [{
        id: '1',
        url: 'test',
        name: 'batatinha'
      }]
    })
  }
}

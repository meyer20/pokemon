import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonApi } from '../../api/pokemon.api';
import { Constants } from '../../components/utils/constants';
import { IPokemonListItem, IResponseItem, Pokemon } from '../../domain';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private pokemonApi: PokemonApi) { }

  getPokemonList(offset = 0, limit = Constants.DEFAULT_PAGE_SIZE): Observable<IResponseItem<IPokemonListItem>> {
    return this.pokemonApi.getPokemonList(offset, limit);
  }

  getPokemonById(pokemonId: string): Observable<Pokemon> {
    return this.pokemonApi.getPokemonById(pokemonId);
  }
}

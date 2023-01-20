import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IResponseItem, IPokemonListItem, IPokemonItem, Pokemon } from '../domain';
import { Constants, Utils } from '../components/utils';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonApi {
  private readonly path = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  getPokemonList(offset = 0, limit = Constants.DEFAULT_PAGE_SIZE): Observable<IResponseItem<IPokemonListItem>> {
    return this.http.get<IResponseItem<IPokemonListItem>>(`${this.path}?offset=${offset}&limit=${limit}`)
      .pipe(
        map((data: IResponseItem<IPokemonListItem>) => {
          data.results.map((result: IPokemonListItem) => {
            result.id = Utils.getPokemonIdFromURL(result.url);
            result.favorite = this.localStorageService.checkPokemonIsFavorite(result.id.toString());
          });
          return data;
        }));
  }

  getPokemonById(pokemonId: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.path}${pokemonId}`)
      .pipe(
        map((pokemonData: IPokemonItem) => {
          pokemonData.favorite = this.localStorageService.checkPokemonIsFavorite(pokemonData.id.toString());
          return new Pokemon(pokemonData);
        }));
  }
}

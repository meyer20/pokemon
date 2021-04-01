import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResponseItem, PokemonListItem, PokemonItem } from '../domain';
import { Utils } from '../components/utils';
import { LocalStorageService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class PokemonApi {
  private readonly path = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  getPokemonList(offset = 0, limit = 20): Observable<ResponseItem<PokemonListItem>> {
    return this.http.get<ResponseItem<PokemonListItem>>(`${this.path}?offset=${offset}&limit=${limit}`)
      .pipe(map((data) => {
        data.results.map(result => {
          result.id = Utils.getPokemonIdFromURL(result.url);
          result.favorite = this.localStorageService.checkPokemonIsFavorite(result.id.toString());
        });
        return data;
      }));
  }

  getPokemonById(pokemonId: string): Observable<PokemonItem> {
    return this.http.get<PokemonItem>(`${this.path}${pokemonId}`).pipe(map((data) => {
      data.favorite = this.localStorageService.checkPokemonIsFavorite(data.id.toString());
      return data;
    }));
  }
}

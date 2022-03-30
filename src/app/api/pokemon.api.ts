import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IResponseItem, IPokemonListItem, IPokemonItem, Pokemon, PokemonFactory } from '../domain';
import { Constants, Utils } from '../components/utils';
import { LocalStorageService, SnackbarService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class PokemonApi {
  private readonly path = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService,
              private snackbarService: SnackbarService) {}

  getPokemonList(offset = 0, limit = Constants.DEFAULT_PAGE_SIZE): Observable<IResponseItem<IPokemonListItem>> | Observable<any> {
    return this.http.get<IResponseItem<IPokemonListItem>>(`${this.path}?offset=${offset}&limit=${limit}`)
      .pipe(map((data) => {
        data.results.map(result => {
          result.id = Utils.getPokemonIdFromURL(result.url);
          result.favorite = this.localStorageService.checkPokemonIsFavorite(result.id.toString());
        });
        return data;
      }), catchError((err) => {
        this.snackbarService.show('Ops, algo de errado aconteceu!', true);
        return err;
      }));
  }

  getPokemonById(pokemonId: string): Observable<Pokemon> | Observable<any> {
    return this.http.get<Pokemon>(`${this.path}${pokemonId}`).pipe(map((pokemonData: IPokemonItem) => {
      pokemonData.favorite = this.localStorageService.checkPokemonIsFavorite(pokemonData.id.toString());
      return PokemonFactory(pokemonData);
    }), catchError((err) => {
      this.snackbarService.show('Ops, algo de errado aconteceu!', true);
      return err;
    }));
  }
}

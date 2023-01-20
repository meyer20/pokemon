import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { finalize, forkJoin, Subject, takeUntil, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pokemon, IPokemonListItem } from '../../domain';
import { LocalStorageService, PokemonService } from '../../services';

@Component({
  selector: 'app-pokemon-favorites',
  templateUrl: './pokemon-favorites.component.html'
})
export class PokemonFavoritesComponent implements OnInit, OnDestroy {
  pokemons: Array<Pokemon> = [];
  favorites: Array<string> = [];
  isLoading = true;
  private destroy$ = new Subject();

  constructor(
    public localStorageService: LocalStorageService,
    private pokemonService: PokemonService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Pokemons favoritos');
    this.favorites = this.localStorageService.getFavorites();
    this.initData();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  initData(): void {
    const pokemonRequestStack = [];
    if (!this.favorites.length) {
      this.isLoading = false;
      return;
    }

    this.favorites.forEach(pokemonId => {
      pokemonRequestStack.push(this.pokemonService.getPokemonById(pokemonId));
    });

    forkJoin(pokemonRequestStack)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          this.isLoading = false;
        }),
        catchError((err) => {
          return throwError(err)
        })
      )
      .subscribe((pokemonDataArray: Array<Pokemon>) => {
        this.pokemons = pokemonDataArray;
      });
  }

  removeFavorite(pokemon: Pokemon | IPokemonListItem): void {
    this.pokemons = this.pokemons.filter(({ id }) => id !== pokemon.id);
  }
}

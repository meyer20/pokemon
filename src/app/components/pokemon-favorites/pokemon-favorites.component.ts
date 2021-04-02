import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';

import { LocalStorageService } from '../../services';
import { PokemonApi } from '../../api/pokemon.api';
import { PokemonItem, PokemonListItem } from '../../domain';

@Component({
  selector: 'app-pokemon-favorites',
  templateUrl: './pokemon-favorites.component.html',
  styleUrls: ['./pokemon-favorites.component.scss']
})
export class PokemonFavoritesComponent implements OnInit {
  pokemons: Array<PokemonItem> = [];
  favorites: Array<string> = [];
  isLoading = true;

  constructor(public localStorageService: LocalStorageService,
              private pokemonAPI: PokemonApi,
              private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Pokemons favoritos');
    this.favorites = this.localStorageService.getFavorites();
    const pokemonRequestStack = [];

    if (this.favorites.length) {
      this.favorites.forEach(pokemonId => {
        pokemonRequestStack.push(this.pokemonAPI.getPokemonById(pokemonId));
      });

      forkJoin(pokemonRequestStack).subscribe((data: Array<PokemonItem>) => {
        this.pokemons = data;
        this.isLoading = false;
      });
    } else {
      this.isLoading = false;
    }
  }

  removeFavorite(pokemon: PokemonItem | PokemonListItem): void {
    this.pokemons = this.pokemons.filter(listPokemon => listPokemon.id !== pokemon.id);
  }
}

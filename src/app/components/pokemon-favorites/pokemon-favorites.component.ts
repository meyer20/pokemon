import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';

import { LocalStorageService } from '../../services';
import { PokemonApi } from '../../api/pokemon.api';
import { Pokemon, IPokemonListItem } from '../../domain';

@Component({
  selector: 'app-pokemon-favorites',
  templateUrl: './pokemon-favorites.component.html',
  styleUrls: ['./pokemon-favorites.component.scss']
})
export class PokemonFavoritesComponent implements OnInit {
  pokemons: Array<Pokemon> = [];
  favorites: Array<string> = [];
  isLoading = true;

  constructor(public localStorageService: LocalStorageService,
              private pokemonAPI: PokemonApi,
              private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Pokemons favoritos');
    this.favorites = this.localStorageService.getFavorites();
    this.initData();
  }

  initData(): void {
    const pokemonRequestStack = [];
    if (this.favorites.length) {
      this.favorites.forEach(pokemonId => {
        pokemonRequestStack.push(this.pokemonAPI.getPokemonById(pokemonId));
      });

      forkJoin(pokemonRequestStack).subscribe((pokemonsDataArray: Array<Pokemon>) => {
        this.pokemons = pokemonsDataArray;
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
    } else {
      this.isLoading = false;
    }
  }

  removeFavorite(pokemon: Pokemon | IPokemonListItem): void {
    this.pokemons = this.pokemons.filter(listPokemon => listPokemon.id !== pokemon.id);
  }
}

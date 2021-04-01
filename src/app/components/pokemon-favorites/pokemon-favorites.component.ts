import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services';
import { PokemonApi } from '../../api/pokemon.api';
import { forkJoin } from 'rxjs';
import { PokemonItem, PokemonListItem } from '../../domain';

@Component({
  selector: 'app-pokemon-favorites',
  templateUrl: './pokemon-favorites.component.html',
  styleUrls: ['./pokemon-favorites.component.scss']
})
export class PokemonFavoritesComponent implements OnInit {
  isLoading = true;
  favorites = [];
  pokemons = [];

  constructor(private localStorageService: LocalStorageService, private pokemonAPI: PokemonApi) { }

  ngOnInit(): void {
    this.favorites = this.localStorageService.getFavorites();
    const pokemonRequestStack = [];

    if (this.favorites.length) {
      this.favorites.forEach(pokemonId => {
        pokemonRequestStack.push(this.pokemonAPI.getPokemonById(pokemonId));
      });

      forkJoin(pokemonRequestStack).subscribe(data => {
        console.log(data);
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

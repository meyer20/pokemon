import { Injectable } from '@angular/core';
import { PokemonItem, PokemonListItem } from '../domain';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setFavorite(pokemon: PokemonItem | PokemonListItem): void {
    let favorites = this.getFavorites();

    if (favorites) {
      favorites.push(pokemon.id.toString());
    } else {
      favorites = [pokemon.id.toString()];
    }

    this.setLocalStorageFavorite(favorites);
  }

  removeFavorite(pokemon: PokemonItem | PokemonListItem): void {
    const favorites = this.getFavorites();

    favorites.filter(favorite => favorite === pokemon.id.toString()).forEach(() => {
      favorites.splice(favorites.indexOf(pokemon.id.toString()), 1);
    });

    this.setLocalStorageFavorite(favorites);
  }

  getFavorites(): Array<string> {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  }

  checkPokemonIsFavorite(pokemonId: string): boolean {
    console.log('checkPokemonIsFavorite');
    return this.getFavorites().indexOf(pokemonId) > -1;
  }

  clearFavorites(): void {
    localStorage.removeItem('userData');
  }

  private setLocalStorageFavorite(favorites: Array<string>): void {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

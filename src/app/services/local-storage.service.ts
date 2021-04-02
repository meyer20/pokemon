import { Injectable } from '@angular/core';

import { PokemonItem, PokemonListItem } from '../domain';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private snackbarService: SnackbarService) { }

  setFavorite(pokemon: PokemonItem | PokemonListItem): void {
    let favorites = this.getFavorites();

    if (favorites) {
      favorites.push(pokemon.id.toString());
    } else {
      favorites = [pokemon.id.toString()];
    }

    this.snackbarService.show(`O Pokemon ${pokemon.name} foi adicionado aos favoritos!`);
    this.setLocalStorageFavorite(favorites);
  }

  removeFavorite(pokemon: PokemonItem | PokemonListItem): void {
    const favorites = this.getFavorites();

    favorites.filter(favorite => favorite === pokemon.id.toString()).forEach(() => {
      favorites.splice(favorites.indexOf(pokemon.id.toString()), 1);
    });

    this.snackbarService.show(`O Pokemon ${pokemon.name} foi removido dos favoritos!`);
    this.setLocalStorageFavorite(favorites);
  }

  getFavorites(): Array<string> {
    return Array.from(new Set(JSON.parse(localStorage.getItem('favorites')))) || [];
  }

  checkPokemonIsFavorite(pokemonId: string): boolean {
    return this.getFavorites().indexOf(pokemonId) > -1;
  }

  clearFavorites(): void {
    localStorage.removeItem('favorites');
  }

  private setLocalStorageFavorite(favorites: Array<string>): void {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

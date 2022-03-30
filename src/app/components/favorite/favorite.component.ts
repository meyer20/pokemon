import { Component, Input, EventEmitter, Output } from '@angular/core';

import { IPokemonItem, IPokemonListItem } from '../../domain';
import { LocalStorageService } from '../../services';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  @Input() pokemon: IPokemonListItem | IPokemonItem;
  @Input() marginRight = false;
  @Output() removedFavorite = new EventEmitter();

  constructor(public localStorageService: LocalStorageService) { }

  setFavorite(): void {
    this.pokemon.favorite ? this.localStorageService.removeFavorite(this.pokemon) : this.localStorageService.setFavorite(this.pokemon);
    this.pokemon.favorite = !this.pokemon.favorite;
    this.removedFavorite.emit(this.pokemon);
  }
}

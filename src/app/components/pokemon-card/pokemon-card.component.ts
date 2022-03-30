import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { IPokemonListItem } from '../../domain';
import { Utils } from '../utils';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon: IPokemonListItem;
  @Output() removedFavorite = new EventEmitter();

  constructor(private router: Router) { }

  viewMore(pokemon: IPokemonListItem): void {
    this.router.navigate(['/profile/' + pokemon.id] );
  }

  get pokemonSpriteURL(): string {
    return Utils.getPokemonSpriteURL(this.pokemon.id);
  }

  // TODO Implement Pokemon Sprite error handling
  pokemonSpriteLoadError(error: unknown): void {
    console.error('Erro ao carregar sprite do Pokemon:', this.pokemon, error);
  }
}

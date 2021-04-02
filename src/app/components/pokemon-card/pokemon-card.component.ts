import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { PokemonListItem } from '../../domain';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemons: Array<PokemonListItem> = [];
  @Output() removedFavorite = new EventEmitter();

  constructor(private router: Router) { }

  viewMore(pokemon: PokemonListItem): void {
    this.router.navigate(['/profile/' + pokemon.id] );
  }
}

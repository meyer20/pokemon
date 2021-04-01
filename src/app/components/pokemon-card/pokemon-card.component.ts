import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonListItem } from '../../domain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemons: Array<PokemonListItem> = [];
  @Output() removedFavorite = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewMore(pokemon: PokemonListItem): void {
    this.router.navigate(['/profile/' + pokemon.id] );
  }
}

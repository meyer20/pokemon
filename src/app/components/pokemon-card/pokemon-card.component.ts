import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { IPokemonListItem, Pokemon } from '../../domain';
import { Utils } from '../utils';
import { PokemonApi } from '../../api/pokemon.api';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: IPokemonListItem;
  @Output() removedFavorite = new EventEmitter();
  pokemonData: Pokemon;
  pokemonCardColor: string;

  constructor(private router: Router, private pokemonApi: PokemonApi) {}

  ngOnInit(): void {
    this.setPokemonData();
  }

  setPokemonData(): void {
    this.pokemonApi.getPokemonById(this.pokemon.id).subscribe((pokemonData) => {
      this.pokemonData = pokemonData;
      this.pokemonCardColor = this.pokemonColorByType;
    });
  }

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

  private get pokemonColorByType(): string {
    return Utils.getPokemonBackgroundColorByType(this.pokemonData);
  }
}

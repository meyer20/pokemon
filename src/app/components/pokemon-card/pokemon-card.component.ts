import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IPokemonListItem, Pokemon } from '../../domain';
import { Utils } from '../utils/utils';
import { PokemonService, SnackbarService } from '../../services';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit, OnDestroy {
  @Input() pokemon: IPokemonListItem;
  @Output() removedFavorite = new EventEmitter();
  pokemonData: Pokemon;
  pokemonCardColor: string;
  private destroy$ = new Subject();

  constructor(
    private router: Router,
    private pokemonService: PokemonService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.setPokemonData();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  setPokemonData(): void {
    this.pokemonService.getPokemonById(this.pokemon.id)
      .pipe(
        takeUntil(this.destroy$),
        catchError((err) => {
          this.snackbarService.show('Ops, algo de errado aconteceu!', true);
          return err;
        })
      )
      .subscribe((pokemonData: Pokemon) => {
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

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { catchError } from 'rxjs/operators';
import { finalize, Subject, takeUntil, throwError } from 'rxjs';

import { Pokemon, PokemonTypeEnum } from '../../domain';
import { PokemonService } from '../../services';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html'
})
export class PokemonProfileComponent implements OnInit, OnDestroy {
  pokemonId: string;
  pokemon: Pokemon;
  pokemonTypeEnum = PokemonTypeEnum;
  isLoading = true;
  private destroy$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
    private titleService: Title) {
    this.pokemonId = this.activatedRoute.snapshot.params.pokemonId;
  }

  ngOnInit(): void {
    this.titleService.setTitle('Perfil do Pokemon');
    this.pokemonId ? this.getPokemon() : this.isLoading = false;
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  getPokemon(): void {
    this.pokemonService.getPokemonById(this.pokemonId.toString())
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          this.isLoading = false;
        }),
        catchError((err) => {
          this.router.navigate(['/not-found']);
          return throwError(err);
        })
      )
      .subscribe((pokemonData: Pokemon) => {
        this.pokemon = pokemonData;
        this.titleService.setTitle(this.pokemon.name);
      });
  }
}

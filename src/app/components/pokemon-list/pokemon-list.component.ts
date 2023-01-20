import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { finalize, Subject, takeUntil, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IPokemonListItem, IResponseItem } from '../../domain';
import { Constants } from '../utils/constants';
import { PokemonService, SnackbarService } from '../../services';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit, OnDestroy {
  pokemons: Array<IPokemonListItem> = [];
  currentPage = 0;
  hasNext: boolean;
  isLoading = true;
  private destroy$ = new Subject();

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private titleService: Title,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.getPokemons();
    this.titleService.setTitle('Listagem de Pokemons');
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  private getPokemons(offset = 0): void {
    this.pokemonService.getPokemonList(offset)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          this.isLoading = false;
        }),
        catchError((err) => {
          this.snackbarService.show('Ops, algo de errado aconteceu!', true);
          return throwError(err);
        })
      )
      .subscribe((data: IResponseItem<IPokemonListItem>) => {
        this.hasNext = Boolean(data.next);
        this.pokemons.push(...data.results);
      });
  }

  onScroll(): void {
    if (this.hasNext) {
      ++this.currentPage;
      this.getPokemons(this.currentPage * Constants.DEFAULT_PAGE_SIZE);
    }
  }

  viewMore(pokemon: IPokemonListItem): void {
    this.router.navigate(['/profile/' + pokemon.id] );
  }
}

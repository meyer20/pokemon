import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { finalize, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PokemonApi } from '../../api/pokemon.api';
import { IPokemonListItem, IResponseItem } from '../../domain';
import { Constants } from '../utils/constants';
import { SnackbarService } from '../../services';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: Array<IPokemonListItem> = [];
  currentPage = 0;
  hasNext: boolean;
  isLoading = true;

  constructor(
    private pokemonApi: PokemonApi,
    private router: Router,
    private titleService: Title,
    private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.getPokemons();
    this.titleService.setTitle('Listagem de Pokemons');
  }

  private getPokemons(offset = 0): void {
    this.pokemonApi.getPokemonList(offset)
      .pipe(
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

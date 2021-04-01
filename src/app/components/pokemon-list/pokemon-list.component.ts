import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PokemonApi } from '../../api/pokemon.api';
import { PokemonListItem, ResponseItem } from '../../domain';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: Array<PokemonListItem> = [];
  currentPage = 0;
  hasNext: boolean;
  isLoading = true;

  constructor(private pokemonApi: PokemonApi, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  private getPokemons(offset = 0): void {
    this.pokemonApi.getPokemonList(offset).subscribe((data: ResponseItem<PokemonListItem>) => {
      this.isLoading = false;
      this.hasNext = Boolean(data.next);
      this.pokemons.push(...data.results);
    });
  }

  onScroll(): void {
    console.log('scroll');
    if (this.hasNext) {
      ++this.currentPage;
      this.getPokemons(this.currentPage * 20);
    }
  }

  viewMore(pokemon: PokemonListItem): void {
    this.router.navigate(['/profile/' + pokemon.id] );
  }
}

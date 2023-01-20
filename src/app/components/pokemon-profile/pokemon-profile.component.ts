import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { catchError } from 'rxjs/operators';
import { finalize, throwError } from 'rxjs';

import { PokemonApi } from '../../api/pokemon.api';
import { Pokemon, PokemonTypeEnum } from '../../domain';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss']
})
export class PokemonProfileComponent implements OnInit {
  pokemonId: string;
  pokemon: Pokemon;
  pokemonTypeEnum = PokemonTypeEnum;
  isLoading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pokemonAPI: PokemonApi,
    private titleService: Title) {
    this.pokemonId = this.activatedRoute.snapshot.params.pokemonId;
  }

  ngOnInit(): void {
    this.titleService.setTitle('Perfil do Pokemon');
    this.pokemonId ? this.getPokemon() : this.isLoading = false;
  }

  getPokemon(): void {
    this.pokemonAPI.getPokemonById(this.pokemonId.toString())
      .pipe(
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

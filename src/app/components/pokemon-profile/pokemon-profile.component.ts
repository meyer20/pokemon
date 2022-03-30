import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { PokemonApi } from '../../api/pokemon.api';
import { Pokemon, PokemonTypeEnum } from '../../domain';
import { Utils } from '../utils';

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

  constructor(private activatedRoute: ActivatedRoute,
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
    this.pokemonAPI.getPokemonById(this.pokemonId.toString()).subscribe((pokemonData: Pokemon) => {
      this.isLoading = false;
      this.pokemon = pokemonData;
      console.log(pokemonData);
      this.titleService.setTitle(this.pokemon.name);
    }, () => {
      this.router.navigate(['/not-found']);
    });
  }

  get pokemonColorByType(): string {
    return Utils.getPokemonBackgroundColorByType(this.pokemon);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { PokemonApi } from '../../api/pokemon.api';
import { PokemonItem, PokemonTypeEnum, SpritePathItem } from '../../domain';
import { Utils } from '../utils';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss']
})
export class PokemonProfileComponent implements OnInit {
  pokemonId: string;
  pokemon: PokemonItem;
  sprites: Array<SpritePathItem> = [];
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
    this.pokemonAPI.getPokemonById(this.pokemonId.toString()).subscribe(data => {
      this.isLoading = false;
      this.pokemon = data;
      this.titleService.setTitle(this.pokemon.name);
      this.sprites = Utils.getSpritesPathFromPokemon(this.pokemon.sprites);
    }, () => {
      this.router.navigate(['/not-found']);
    });
  }

  get pokemonSpriteURL(): string {
    return Utils.getPokemonSpriteURL(this.pokemon.id);
  }
}

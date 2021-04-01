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
  pokemonData: PokemonItem;
  sprites: Array<SpritePathItem> = [];
  pokemonTypeEnum = PokemonTypeEnum;
  isLoading = true;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private pokemonAPI: PokemonApi,
              private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Perfil do Pokemon');
    this.pokemonId = this.activatedRoute.snapshot.params.pokemonId;
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokemonAPI.getPokemonById(this.pokemonId).subscribe(data => {
      this.isLoading = false;
      this.pokemonData = data;
      this.titleService.setTitle(this.pokemonData.name);
      this.sprites = Utils.getSpritesPathFromPokemon(this.pokemonData.sprites);
    }, () => {
      this.router.navigate(['/not-found']);
    });
  }
}

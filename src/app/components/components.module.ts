import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderModule } from './header/header.module';
import { NotFoundModule } from './not-found/not-found.module';
import { PokemonListModule } from './pokemon-list/pokemon-list.module';
import { PokemonProfileModule } from './pokemon-profile/pokemon-profile.module';
import { PokemonApi } from '../api/pokemon.api';
import { FavoriteModule } from './favorite/favorite.module';
import { LoadingModule } from './loading/loading.module';
import { PokemonCardModule } from './pokemon-card/pokemon-card.module';
import { PokemonFavoritesModule } from './pokemon-favorites/pokemon-favorites.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    NotFoundModule,
    PokemonListModule,
    PokemonProfileModule,
    FavoriteModule,
    LoadingModule,
    PokemonCardModule,
    PokemonFavoritesModule,
    HttpClientModule
  ],
  providers: [PokemonApi]
})
export class ComponentsModule { }

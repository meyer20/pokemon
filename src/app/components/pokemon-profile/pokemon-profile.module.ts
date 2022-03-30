import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonProfileComponent } from './pokemon-profile.component';
import { FavoriteModule } from '../favorite/favorite.module';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FavoriteModule,
    LoadingModule
  ],
  declarations: [PokemonProfileComponent],
  exports: [PokemonProfileComponent]
})
export class PokemonProfileModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonCardComponent } from './pokemon-card.component';
import { FavoriteModule } from '../favorite/favorite.module';

@NgModule({
  imports: [CommonModule, FavoriteModule],
  declarations: [PokemonCardComponent],
  exports: [PokemonCardComponent]
})
export class PokemonCardModule { }

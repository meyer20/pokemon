import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonFavoritesComponent } from './pokemon-favorites.component';
import { PokemonCardModule } from '../pokemon-card/pokemon-card.module';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  imports: [CommonModule, PokemonCardModule, LoadingModule],
  declarations: [PokemonFavoritesComponent],
  exports: [PokemonFavoritesComponent]
})
export class PokemonFavoritesModule { }

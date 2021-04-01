import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PokemonListComponent } from './pokemon-list.component';
import { LoadingModule } from '../loading/loading.module';
import { PokemonCardModule } from '../pokemon-card/pokemon-card.module';

@NgModule({
  imports: [CommonModule, InfiniteScrollModule, LoadingModule, PokemonCardModule],
  declarations: [PokemonListComponent],
  exports: [PokemonListComponent]
})
export class PokemonListModule { }

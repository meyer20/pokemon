import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteComponent } from './favorite.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FavoriteComponent],
  exports: [FavoriteComponent]
})
export class FavoriteModule { }

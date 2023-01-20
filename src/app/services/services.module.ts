import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { LocalStorageService, PokemonService, SnackbarService } from './index';

@NgModule({
  imports: [HttpClientModule, MatSnackBarModule],
  providers: [
    LocalStorageService,
    SnackbarService,
    MatSnackBar,
    PokemonService
  ]
})
export class ServicesModule { }

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { LocalStorageService } from './local-storage.service';
import { SnackbarService } from './snackbar.service';

@NgModule({
  imports: [HttpClientModule, MatSnackBarModule],
  providers: [
    LocalStorageService,
    SnackbarService,
    MatSnackBar
  ]
})
export class ServicesModule { }

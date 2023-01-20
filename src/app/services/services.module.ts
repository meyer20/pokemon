import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatLegacySnackBar as MatSnackBar, MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';

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

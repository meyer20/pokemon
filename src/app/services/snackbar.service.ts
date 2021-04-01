import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private matSnackBar: MatSnackBar) { }

  show(message: string, error = false): void {
    this.matSnackBar.open(message, null, { duration: !error ? 3000 : 5000 });
  }
}

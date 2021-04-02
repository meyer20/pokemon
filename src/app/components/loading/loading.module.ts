import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingComponent } from './loading.component';

@NgModule({
  imports: [CommonModule, NoopAnimationsModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent]
})
export class LoadingModule { }

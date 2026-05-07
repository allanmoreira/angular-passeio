import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing-module';
import { GaleriaComponent } from './galeria/galeria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GaleriaComponent],
  imports: [CommonModule, GaleriaRoutingModule, ReactiveFormsModule, NgOptimizedImage, FormsModule],
})
export class GaleriaModule {}

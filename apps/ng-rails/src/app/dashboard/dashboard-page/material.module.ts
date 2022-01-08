import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';

const MATERIAL_MODULES = [
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
  MatGridListModule
];

@NgModule({
  imports: [
    MATERIAL_MODULES
  ],
  exports: [
    MATERIAL_MODULES
  ]
})
export class MaterialModule { }

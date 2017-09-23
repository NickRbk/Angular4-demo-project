import { NgModule } from '@angular/core';
import { ToggleDirective } from '../directives/toggle.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ToggleDirective
  ],
  exports: [
    CommonModule,
    ToggleDirective
  ]
})
export class SharedModule {}

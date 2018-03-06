import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

export const SHARED_MODULES = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: SHARED_MODULES,
  exports: SHARED_MODULES,
})
export class SharedModule { }

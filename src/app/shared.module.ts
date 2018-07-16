import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatPaginatorModule
} from '@angular/material';

const FormHelpers = [
  FormsModule,
  ReactiveFormsModule
];

const MaterialComponents = [
  BrowserAnimationsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatPaginatorModule
];

@NgModule({
  imports: [
    CommonModule,
    ...FormHelpers,
    ...MaterialComponents
  ],
  exports: [
    ...FormHelpers,
    ...MaterialComponents
  ],
  declarations: []
})
export class SharedModule { }
